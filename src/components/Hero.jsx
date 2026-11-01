import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { Typewriter } from 'react-simple-typewriter'
import { swaraj_photo } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full mx-auto overflow-hidden'>
      {/* ========================================================
          DESKTOP HERO LAYOUT (lg: and above, >= 1024px)
          Preserved exactly as originally designed with side-by-side
          text and photo, and full background 3D workstation
         ======================================================== */}
      <div className='hidden lg:block w-full h-screen relative'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-between items-start gap-8 z-10 pointer-events-none`}>
          {/* Left Side: Name, Heading & Animated Roles */}
          <div className='flex flex-row items-start gap-5 pointer-events-auto'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 h-72 violet-gradient' />
            </div>
            
            <div> 
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className='text-[#915eff]'>Swaraj</span>
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
          <div className='pointer-events-auto self-start ml-auto flex justify-center items-center z-10'>
            <div className='relative group'>
              <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-[#915eff]/60 via-[#f43f85]/40 to-[#38bdf8]/60 opacity-60 blur-md group-hover:opacity-90 transition duration-500' />
              
              <div className='relative w-[250px] lg:w-[270px] h-[250px] lg:h-[270px] aspect-square rounded-full p-1 bg-[#0c1026] border-2 border-[#915eff]/70 shadow-[0_0_30px_rgba(145,94,255,0.35)] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
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
         
        {/* Full Desktop 3D Workstation */}
        <ComputersCanvas isMobile={false} />

        <div className='absolute bottom-10 w-full flex justify-center items-center pointer-events-none'>
          <a href='#about' className='pointer-events-auto'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>

      {/* ========================================================
          MOBILE HERO LAYOUT (< lg, screens < 1024px)
          Clean, natural sequential ordering:
          1. Navbar (fixed top)
          2. Introduction Heading & Animated Roles
          3. Centered Circular Profile Photograph
          4. 3D Workstation (properly sized, non-overlapping)
          5. Bouncing Scroll Indicator to About
         ======================================================== */}
      <div className='lg:hidden w-full flex flex-col items-center pt-[90px] xs:pt-[98px] pb-6 px-4'>
        {/* 1. Introduction Heading & Animated Roles */}
        <div className='w-full flex flex-row items-start gap-3 sm:gap-4 max-w-lg'>
          <div className='flex flex-col justify-center items-center mt-2'>
            <div className='w-3.5 h-3.5 rounded-full bg-[#915eff]' />
            <div className='w-1 h-20 xs:h-24 violet-gradient' />
          </div>
          
          <div> 
            <h1 className='text-white font-black text-[28px] xs:text-[34px] sm:text-[42px] leading-tight'>
              Hi, I'm <span className='text-[#915eff]'>Swaraj</span>
            </h1>
             
            <p className='text-white-100 text-[15px] xs:text-[17px] sm:text-[19px] mt-1 font-medium'>
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

        {/* 2. Centered Circular Profile Photograph */}
        <div className='mt-3 mb-1 flex justify-center items-center z-10'>
          <div className='relative group'>
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-[#915eff]/60 via-[#f43f85]/40 to-[#38bdf8]/60 opacity-70 blur-md' />
            <div className='relative w-[135px] xs:w-[150px] sm:w-[165px] h-[135px] xs:h-[150px] sm:h-[165px] aspect-square rounded-full p-1 bg-[#0c1026] border-2 border-[#915eff]/70 shadow-[0_0_25px_rgba(145,94,255,0.4)] overflow-hidden flex items-center justify-center'>
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

        {/* 3. 3D Workstation on Mobile (Cleanly placed, non-overlapping) */}
        <div className='w-full max-w-lg h-[250px] xs:h-[280px] sm:h-[320px] relative z-0 my-1'>
          <ComputersCanvas isMobile={true} />
        </div>

        {/* 4. Scroll indicator */}
        <div className='w-full flex justify-center items-center mt-2 z-10'>
          <a href='#about'>
            <div className='w-[28px] h-[48px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1.5'>
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='w-2 h-2 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "hero")
