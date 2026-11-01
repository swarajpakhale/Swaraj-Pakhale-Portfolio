import ErrorBoundary from '../ErrorBoundary';
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35}
       groundColor="#1a1a2e" />
      <ambientLight intensity={0.2} />
      <pointLight intensity={1.5} position={[0, -1, 0]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [0, -3, -2.2] : [0, -3.35, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches;
    }
    return false;
  });

  useEffect(() => {
  
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    
    setIsMobile(mediaQuery.matches);

    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) return null;

  return (
    <ErrorBoundary fallback={null}>
      <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: 'low-power',
        antialias: false,
      }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
        });
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
    </ErrorBoundary>
  );
};


export default ComputersCanvas;
