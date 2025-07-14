import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

import  { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
     <header className='padding-x py-8 absolute z-10 w-full'>
         <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo}
                alt="Logo" 
                width = {130}
                height = {29}
                
                />
            </a>
         
            {/* <ul className = {`flex-1 flex justify-center items-center gap-16 max-lg max-lg:hidden ${isOpen ? "flex flex-col absolute top-6 right-12 gap-2 py-2" : "hidden"} lg:flex`}>
                {navLinks.map((item) => (
                     <li key={item.label}>
                        <a href= {item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                         
                        >
                            {item.label}
                        </a>
                     </li>
               ))}
            </ul> */}
{/* 
        <ul className={`
  flex-1 gap-16 justify-center items-center 
  ${isOpen ? 'flex flex-col mt-4' : 'hidden'} 
  lg:flex lg:flex-row lg:mt-0
`}>
  {navLinks.map((item) => (
    <li key={item.label}>
      <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
        {item.label}
      </a>
    </li>
  ))}
</ul> */}

<ul className={`
  gap-4 flex-col bg-white p-6 shadow-md rounded-md
  absolute top-20 right-2 z-50 
  ${isOpen ? 'flex' : 'hidden'}
  lg:flex lg:flex-row lg:static lg:p-0 lg:shadow-none lg:bg-transparent
  flex-1 items-center lg:gap-24 lg:justify-center
`}>
  {navLinks.map((item) => (
    <li key={item.label}>
      <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray max-lg:hover:text-coral-red">
        {item.label}
      </a>
    </li>
  ))}
</ul>





            <div className='max-lg:block hidden'>
                 <img src={hamburger} alt="hamburger"
                 width={25}
                 height={25}
                 className='cursor-pointer'
                   onClick={() => {
                       setIsOpen(!isOpen);
                   }}
                 />
            </div>
         </nav>
     </header>
  )
}

export default Nav