import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { textVariant } from "../utils/motion"

const MAX_BALLS_MOBILE = 6;

const Tech = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Competencies</p>
        <h2 className={styles.sectionHeadText}>Skills &amp; Technologies.</h2>
      </motion.div>

      {/* 3D Floating Ball Showcase */}
      <div className="mt-14 flex flex-row flex-wrap justify-center gap-8 sm:gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 flex flex-col items-center justify-center group" key={technology.name}>
            <div className="w-28 h-28 flex items-center justify-center">
              {isMobile && index >= MAX_BALLS_MOBILE ? (
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-20 h-20 object-contain drop-shadow-md"
                />
              ) : (
                <BallCanvas icon={technology.icon} />
              )}
            </div>
            <p className="text-[13px] text-secondary mt-2 text-center font-medium group-hover:text-white transition-colors">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "tech");
