import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { Typewriter } from 'react-simple-typewriter'
import { swaraj_photo } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      {/* Hero Content Container */}
      <div className={`${styles.paddingX} absolute inset-0 top-[115px] sm:top-[125px] max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 z-10 pointer-events-none`}>
        {/* Left Side: Name, Heading & Animated Roles */}
        <div className='flex flex-row items-start gap-4 sm:gap-5 pointer-events-auto'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-72 h-36 violet-gradient' />
          </div>
          
          <div> 
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm Swaraj
            </h1>
             
            <p className={`${styles.heroSubText} mt-3 text-white-100`}>
              <span>
                <Typewriter
                  words={['Java Developer', 'Spring Boot Developer', 'React Developer']}
                  loop={true}
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Circular Profile Photograph on Far Right */}
        <div className='pointer-events-auto self-center lg:self-start lg:ml-auto flex justify-center items-center z-10'>
          <div className='relative group'>
            {/* Soft Ambient Neon Glow Aura */}
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-[#915eff]/60 via-[#f43f85]/40 to-[#38bdf8]/60 opacity-60 blur-md group-hover:opacity-90 transition duration-500' />
            
            {/* Perfectly Circular Portrait Container */}
            <div className='relative w-[155px] xs:w-[190px] sm:w-[230px] md:w-[250px] lg:w-[270px] h-[155px] xs:h-[190px] sm:h-[230px] md:h-[250px] lg:h-[270px] aspect-square rounded-full p-1 bg-[#0c1026] border-2 border-[#915eff]/70 shadow-[0_0_30px_rgba(145,94,255,0.35)] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
              <img
                src={swaraj_photo}
                alt="Swaraj Pakhale"
                className='w-full h-full object-cover object-[center_18%] rounded-full'
                loading='eager'
                fetchPriority='high'
              />
            </div>
          </div>
        </div>
      </div>
       
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pointer-events-none'>
        <a href='#about' className='pointer-events-auto'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero,"hero")