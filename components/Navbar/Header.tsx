import Link from 'next/link';
import { BsHandbag, BsSearch } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Navbar from './Navbar';
import { useState } from 'react';



const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='bg-white xs:overflow-hidden px-3 '>
        <div className='flex items-center justify-around '>
            <div className='z-[50] p-5 md:w-auto w-full flex justify-between'>
              <Link href='/'>
                  <img className='cursor-pointer h-9' src="/assets/nike-logo.png" alt="nike logo" />
              </Link>
              
            </div>
            <div className='md:flex hidden items-center gap-8'>
                <Navbar />
            </div>
            <ul className='flex gap-3'>
              <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full'><BsSearch/></li>
              <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full md:flex hidden'><HiOutlineHeart/></li>
              <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full'><BsHandbag/></li>
              <div className='lg:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full'>{ openMenu ? <GrClose/> : <AiOutlineMenu/>}</li>
              </div>
            </ul>
            
            {/* mobile nav */}
           { openMenu && 
           (<div className={`md:hidden cursor-pointer bg-white absolute bottom-0 right-0 w-full h-full py-12 pl-4 duration-500 ${openMenu ? 'left-0' : 'left-[100%]'}`}>
            <div className='lg:hidden cursor-pointer p-5 flex justify-end' onClick={() => setOpenMenu(!openMenu)}>
                <span className='cursor-pointer '>{ openMenu && <GrClose/> }</span>
              </div>
              <Navbar/>
            </div>)
            }
        </div>
        
    </nav>
  )
}

export default Header;