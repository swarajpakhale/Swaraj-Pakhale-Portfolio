import { useState,useRef } from "react"
import {motion} from 'framer-motion'
import emailjs  from '@emailjs/browser'
import { styles } from "../styles"
import {EarthCanvas} from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


const Contact = () => {
  const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
  })
    const [loading, setLoading] = useState(false);
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setForm({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
      setLoading(true);
       
      emailjs.send(
        'service_pem01tm','template_cttmepw',{
          from_name:form.name,
          to_name:'Swaraj',
          from_email:form.email,
          to_email:'swarajpakhale2@gmail.com',
          message:form.message,
        },'ok93FNXjWVbZ3J7_s'

      )
.then(()=>{
  setLoading(false);
  alert('Thank You for sending message');
  setForm({
    name: '',
    email:'',
    message:'',
  })

},(error)=>{
  setLoading(false)
  console.error(error);
  alert('Something went wrong')
}

)

    }
  return (
    <div className="xl:mt-4 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
     <motion.div 
     variants={slideIn("left","tween", 0.2,1)}
     className="flex-[0.75] relative rounded-2xl p-[2px]"
     >
      {/* Google colors rotating gradient border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-[-50%] animate-spin-slow"
          style={{
            background: 'conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4)',
          }}
        />
      </div>

      <div className="relative bg-black-100 p-8 rounded-2xl z-10">
      <p className={styles.sectionSubText}>Get in  touch</p>
      <h4 className={styles.heroHeadText}>Contact.</h4>

      <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 text-secondary text-[14px]">
        <p className="flex items-center gap-2">
          <span>📧</span>
          <a href="mailto:swarajpakhale2@gmail.com" className="text-white hover:text-[#915eff] transition-colors font-medium">
            swarajpakhale2@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span>📍</span>
          <span className="text-gray-300 font-medium">Nagpur, Maharashtra, India</span>
        </p>
      </div>

      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8  "
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4"> Name

          </span>
        
          <input
             type="text"
             name="name"
             value={form.name}
             onChange={handleChange}
             placeholder="What is your name?"
             className="bg-tertiary  py-4 px-6 placeholder:text-secondary border-cyan-600 border-2 text-white rounded-lg outline-none font-medium"

          
          
          />

        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4"> Email

          </span>
        
          <input
             type="email"
             name="email"
            value={form.email}
             onChange={handleChange}
             placeholder="What is your email"
             className="bg-tertiary font-medium py-4 px-6 placeholder:text-secondary border-cyan-600 border-2 text-white rounded-lg outline-none"

          
          
          />

        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4"> Message</span>
          <textarea
             rows={5}
            
             name="message"
             
             value={form.message}
             onChange={handleChange}
             placeholder="write a message"
             className="bg-tertiary font-medium py-4 px-6 placeholder:text-secondary border-cyan-600 border-2 text-white rounded-lg outline-none"

          
          
          />
          
          

        </label>

        <button type="submit"  className="bg-cyan-700 py-3 px-8 outline-none font-bold  text-white w-fit rounded-full shadow-primary  " >
          {loading ? 'sending...' :'Send'}
        
        </button>

    
      </form>

      </div>
     </motion.div>


     <motion.div   
      variants={slideIn("right","tween", 0.2,1)}
      className="xl:flex-1 xl:h-auto lg:h-[480px] md:h-[440px] sm:h-[380px] h-[300px] w-full max-w-full flex items-center justify-center overflow-hidden"
     >
      <EarthCanvas />
     </motion.div>


    </div>
    
  )

}

export default  SectionWrapper(Contact,"contact")