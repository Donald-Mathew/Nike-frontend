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
         
            

<ul className={`
  gap-4 max-sm:gap-0 max-sm:right-1 flex-col bg-white p-2 shadow-md  rounded-md
  absolute max-lg:top-16 max-lg:p-4 max-sm:p-1 max-sm:top-16  right-2 z-50 
  ${isOpen ? 'flex' : 'hidden'}
  lg:flex lg:flex-row lg:static lg:p-0 lg:shadow-none lg:bg-transparent
  flex-1 items-center lg:gap-24 lg:justify-center
`}>
  {navLinks.map((item) => (
    <li key={item.label}>
      <a href={item.href} className="font-montserrat text-lg max-sm:text-[10px] max-sm:leading-none text-slate-gray max-lg:hover:text-coral-red">
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