import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { github, realestate } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", (index % 3) * 0.25, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full sm:w-[350px] flex"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1.02,
          speed: 450,
        }}
        className="bg-ternary p-5 rounded-2xl gradient-border-hover w-full flex flex-col justify-between shadow-card hover:shadow-cyan-900/30 transition-all duration-300"
      >
        <div className="flex flex-col flex-1">
          {/* Consistent Image Container with Aspect Ratio */}
          <div className="relative w-full h-[210px] rounded-2xl overflow-hidden bg-[#0c1229] border border-gray-800">
            <img 
              src={image}
              alt={name}
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = realestate;
              }}
              className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
              {live_demo_link && (
                <div 
                  onClick={() => window.open(live_demo_link, "_blank")} 
                  className="bg-[#915eff] w-10 h-10 rounded-full justify-center flex items-center cursor-pointer hover:bg-[#7a4ad4] transition-colors shadow-lg"
                  title="Live Demo"
                >
                  <span className="text-white text-[18px]">🌐</span>
                </div>
              )}
              {source_code_link && (
                <div 
                  onClick={() => window.open(source_code_link, "_blank")} 
                  className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer hover:border hover:border-cyan-400 transition-colors shadow-lg"
                  title="Source Code"
                >
                  <img src={github} alt="github" className="w-3/4 h-3/4 object-contain" />
                </div>
              )}
            </div>
          </div>

          {/* Title & Description with Consistent Heights */}
          <div className="mt-5 flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[21px] leading-tight min-h-[52px] flex items-center">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Technology Tags Aligned at Bottom */}
        <div className="mt-5 pt-3 border-t border-gray-800/80 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[13px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.5 }} 
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Each project reflects practical software engineering, clean code practices, and modern full-stack development. From Spring Boot enterprise applications with role-based access control to modern React web interfaces and interactive applications, these projects demonstrate technical depth and problem-solving capability.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />  
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
