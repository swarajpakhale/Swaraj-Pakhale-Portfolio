import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import 'react-vertical-timeline-component/style.min.css'
import { Tilt } from "react-tilt"
import TimelineSnake from "./TimelineSnake"

const ExperienceCard =({experience})=>{
  return (
  <VerticalTimelineElement  contentStyle={{ background :'#1d1836', color:'#fff'}}
                            contentArrowStyle={{borderRight :'7px solid #232631'}}
                            
     date={experience.date}
     iconStyle={{background:experience.iconBg}}
     icon={
      
      <div className=" flex justify-center items-center w-full h-full">
        


        <img src={experience.icon} 
        alt={experience.company_name}
        className="w-[90%] h-[90%] object-contain rounded-full"
        />
      </div>
     } >

      <div>
        <h3 className="text-white text-[24px] font-bold blue-text-gradient" >{experience.title}</h3>
        <p className=" text-secondary text-[16px] font-semibold" style={{margin :0}}> {experience.company_name}</p>
        
      </div>


      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point,index)=>(
        
        <li 
            key={`experience-point-${index}`} 
            className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
       ) )}
      </ul>
      
  </VerticalTimelineElement>

  )
}
const Experience = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
    <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}  className="bg-none p-4  sm:w-[360px] w-full"
      >
    <p className={`${styles.sectionSubText}`} >What I have done so far</p>
    <h2 className={`${styles.sectionHeadText} `} >Work Experience.</h2>
    </Tilt>

    </motion.div>
    <div className="mt-20 flex flex-col relative">
      <VerticalTimeline lineColor={'rgba(145, 94, 255, 0.35)'} className="relative">
          <TimelineSnake />
          {experiences.map((experience,index) =>(
            <ExperienceCard key={index} experience={experience} />

         ) )}

      </VerticalTimeline>

    </div>
    </>

  )
}




export default  SectionWrapper(Experience,"work")
