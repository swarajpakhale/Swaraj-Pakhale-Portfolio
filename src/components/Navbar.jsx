import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { logo,menu,close } from '../assets' 
import { navLinks } from '../constants'

const Navbar = () => {
  const [active,setActive] = useState("")
  const [toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-3' onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }} >
          <img src={logo} alt='SP logo' className='w-10 h-10 object-contain rounded-lg' />
          <p className='text-white text-[18px] font-semibold cursor-pointer flex items-center tracking-wide'>
            Swaraj Pakhale
          </p>
        </Link>
        <ul className='list-none flex-row hidden sm:flex gap-10 items-center'>
          {navLinks.map((Link)=>(
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" :" text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
              <a href={`#${Link.id}`}>{Link.title}</a>

            </li>
          ))}
          <li>
            <a
              href="/Swaraj_Pakhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915eff] text-white px-4 py-2 rounded-full text-[14px] font-medium hover:bg-[#7a4ad4] transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ?close :menu} 
          alt='menu' 
          className='w-[27px] h-[27px] object-contain cursor-pointer '
           onClick={() => setToggle(!toggle)} 
           />
           <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-0 rounded-xl`}>
           <ul className='list-none  flex  justify-end items-start flex-col gap-4'>
          {navLinks.map((Link)=>(
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" :" text-secondary"
              } font-serif  cursor-pointer font-medium tect-[15px]`}
              onClick={() =>{
                setToggle(!toggle)
                setActive(Link.title)}}          
              >
              <a href={`#${Link.id}`}>{Link.title}</a>

            </li>
          ))}
          <li>
            <a
              href="/Swaraj_Pakhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915eff] text-white px-4 py-2 rounded-full text-[14px] font-medium hover:bg-[#7a4ad4] transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
           </div>
        </div>
        
       
      </div>

    </nav>

  )
}

export default Navbar