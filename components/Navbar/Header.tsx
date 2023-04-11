import Link from 'next/link';
import { BsHandbag, BsSearch } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Navbar from './Navbar';
import { useState } from 'react';



const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu)

  return (
    <nav className='bg-slate-100 xs:overflow-hidden'>
        <div className='flex items-center justify-around'>
            <div className='z-[50] p-5 md:w-auto w-full flex justify-between'>
              <Link href='/'>
                  <img className='cursor-pointer h-9' src="/assets/nike-logo.png" alt="nike logo" />
              </Link>
              
            </div>
            <div className='md:flex hidden items-center gap-8'>
                <Navbar />
            </div>
            <ul className='flex gap-4 xs:pr-8'>
              <li className='cursor-pointer'><BsSearch/></li>
              <li className='cursor-pointer md:flex hidden'><HiOutlineHeart/></li>
              <li className='cursor-pointer'><BsHandbag/></li>
              <div className='lg:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                <span className='cursor-pointer '>{ openMenu ? <GrClose/> : <AiOutlineMenu/>}</span>
              </div>
            </ul>
            
            {/* mobile nav */}
           { openMenu && 
           (<div className={`md:hidden bg-slate-300 absolute bottom-0 right-0 w-full h-full py-12 pl-4 duration-500 ${openMenu ? 'left-0' : 'left-[100%]'}`}>
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