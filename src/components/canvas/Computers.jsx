import ErrorBoundary from '../ErrorBoundary';
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="#1a1a2e" />
      <ambientLight intensity={0.25} />
      <pointLight intensity={1.5} position={[0, -1, 0]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 256 : 1024}
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.56 : 0.65}
        position={isMobile ? [0, -1.25, -1.0] : [0, -3.35, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ isMobile: propIsMobile }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof propIsMobile !== "undefined") return propIsMobile;
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches;
    }
    return false;
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (typeof propIsMobile !== "undefined") {
      setIsMobile(propIsMobile);
      return;
    }
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [propIsMobile]);

  useEffect(() => {
    // Immediate render if propIsMobile is provided or on mount
    setShouldRender(true);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative" style={{ background: 'transparent' }}>
      {shouldRender && (
        <ErrorBoundary fallback={null}>
          <Canvas
            frameloop="demand"
            shadows={!isMobile}
            dpr={isMobile ? [1, 1] : [1, 1.5]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            style={{ background: 'transparent' }}
            gl={{ 
              preserveDrawingBuffer: false,
              powerPreference: 'low-power',
              antialias: false,
              alpha: true
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
              <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
          </Canvas>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default ComputersCanvas;
