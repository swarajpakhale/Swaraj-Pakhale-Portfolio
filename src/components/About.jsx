import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import {motion} from'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Technology",
    institution: "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur, Maharashtra",
    year: "2024 – 2028",
    score: "Expected Graduation 2028",
    icon: "🎓",
    color: "from-[#4285F4] to-[#34A853]",
    glowColor: "#4285F4",
    highlights: ["Computer Technology", "YCCE Nagpur", "Expected 2028"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Class 12 — Science Stream",
    institution: "Vidya Niketan 12th College, Chandrapur, Maharashtra",
    year: "2023 – 2024",
    score: "84.85%",
    icon: "📘",
    color: "from-[#EA4335] to-[#FBBC05]",
    glowColor: "#EA4335",
    highlights: ["HSC (Class 12)", "Vidya Niketan 12th College", "84.85%"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Class 10 — Secondary Education",
    institution: "Mount Carmel Convent Senior Secondary School, Ghugus, Chandrapur, Maharashtra",
    year: "2021 – 2022",
    score: "85.20%",
    icon: "📗",
    color: "from-[#FBBC05] to-[#34A853]",
    glowColor: "#34A853",
    highlights: ["SSC (Class 10)", "Mount Carmel Convent", "85.20%"],
  },
];

const EducationCard = ({ edu, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", duration: 0.75, delay: 0.1 * index }}
      className="relative w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated connector line */}
      {index < education.length - 1 && (
        <motion.div
          className="absolute left-[29px] top-[80px] w-[3px] h-[calc(100%+20px)] z-0"
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% + 20px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
          style={{
            background: `linear-gradient(to bottom, ${edu.glowColor}, transparent)`,
          }}
        />
      )}

      <div className="flex items-start gap-3 sm:gap-5 relative z-10">
        {/* Timeline node */}
        <motion.div
          className={`edu-timeline-node flex-shrink-0 w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg relative`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 200 }}
          animate={isHovered ? { boxShadow: `0 0 30px ${edu.glowColor}` } : { boxShadow: `0 0 10px ${edu.glowColor}44` }}
        >
          <span className="drop-shadow-lg" style={{ WebkitTextFillColor: 'initial' }}>{edu.icon}</span>
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: edu.glowColor }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Card */}
        <motion.div
          className="edu-card flex-1 relative overflow-hidden rounded-2xl p-[2px]"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Animated gradient border */}
          <div className={`edu-gradient-border absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-60`} />
          
          {/* Inner content */}
          <div className="relative bg-tertiary rounded-2xl p-4 sm:p-8 overflow-hidden">
            {/* Floating particles effect */}
            <div className="edu-particles absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ background: edu.glowColor, left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
                  animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2], scale: [0.5, 1.2, 0.5] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <motion.h3
                  className="text-white text-[20px] sm:text-[24px] font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.span
                  className={`edu-score-badge px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r ${edu.color} text-black shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  animate={{ boxShadow: [`0 0 10px ${edu.glowColor}66`, `0 0 25px ${edu.glowColor}99`, `0 0 10px ${edu.glowColor}66`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {edu.score}
                </motion.span>
              </div>

              <motion.p
                className="text-secondary text-[15px] sm:text-[16px] font-semibold mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                {edu.field}
              </motion.p>

              <motion.p
                className="text-gray-400 text-[13px] sm:text-[14px] mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                🏫 {edu.institution}
              </motion.p>

              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="edu-highlight-tag text-xs px-3 py-1 rounded-full bg-black-100 text-secondary border border-gray-700"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 + i * 0.1, type: "spring" }}
                      whileHover={{ borderColor: edu.glowColor, color: "#fff" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  className="text-xs text-gray-500 mt-2 sm:mt-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  📅 {edu.year}
                </motion.span>
              </div>
            </div>

            {/* Bottom shimmer line */}
            <motion.div
              className="edu-shimmer absolute bottom-0 left-0 h-[2px] w-full"
              style={{ background: `linear-gradient(90deg, transparent, ${edu.glowColor}, transparent)` }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServiceCard =({index,title,icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index,0.7)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
          options={{
          max:45,
          scale:1,
          speed:450,
        }} className='bg-tertiary rounded-[40px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' loading='lazy'/>
            <h3 className=' text-gray-100    hover:first-letter:text-orange-500 px-1 py-2 rounded-full text-[20px] font-bold font-mono text-center'>
             {title}
            </h3>
        </div>
     
      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}  >Overview.</h2>
  </motion.div>

  <motion.p variants={fadeIn(" "," ",0.1,1)} 
    className='mt-3  text-[17px] max-w-3xl leading-[21px]  text-gray-200 '>
    I am Swaraj Pakhale, a B.Tech Computer Technology student at Yeshwantrao Chavan College of Engineering (YCCE), Nagpur. My primary interests include Java development, Spring Boot backend development, React web development, Data Structures and Algorithms, and building practical software applications. With hands-on internship experience leading backend architecture for web applications, I focus on writing clean, scalable code, implementing secure REST APIs, and designing responsive, intuitive user interfaces. A continuous learner and active problem solver, I am eager to apply my technical foundation to solve real-world problems.

</motion.p>

<div className='mt-20 flex flex-wrap gap-10'>
  {services.map((service,index)=>(
    <ServiceCard key={service.title} index={index} {...service} />

  ))}

</div>

{/* ========== EDUCATION SECTION ========== */}
<div className="mt-28">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ type: "spring", duration: 1.25 }}
  >
    <p className={styles.sectionSubText}>What I have studied</p>
    <h2 className={styles.sectionHeadText}>Education.</h2>
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1, delay: 0.1 }}
    className="mt-4 text-secondary text-[16px] max-w-3xl leading-[26px] mb-12"
  >
    My academic journey from Mount Carmel Convent Senior Secondary School, Ghugus and Vidya Niketan 12th College, Chandrapur to Yeshwantrao Chavan College of Engineering, Nagpur — building a strong foundation in computer technology and software engineering.
  </motion.p>

  <div className="flex flex-col gap-10">
    {education.map((edu, index) => (
      <EducationCard key={edu.degree} edu={edu} index={index} />
    ))}
  </div>

  {/* Decorative bottom element */}
  <motion.div
    className="mt-12 flex justify-center"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
  >
    <div className="edu-completion-badge relative px-8 py-3 rounded-full bg-tertiary border border-gray-700 overflow-hidden">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.15), transparent)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative text-sm text-gray-300 font-medium" style={{ WebkitTextFillColor: 'initial' }}>
        🎯 Continuously learning & growing
      </span>
    </div>
  </motion.div>
</div>
  
  </>
  )
}

export default SectionWrapper(About,"about")