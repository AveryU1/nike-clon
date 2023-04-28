import Link from 'next/link';
import { BsHandbag, BsSearch } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Navbar from './Navbar';
import { useState } from 'react';



const Header = () => {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className='xs:overflow-hidden px-3 '>
        <div className='flex items-center justify-between fixed top-0 z-[1] right-0 w-full bg-white '>
            <div className='z-[50] p-5 sm:w-auto flex '>
              <Link href='/'>
                  <img className='cursor-pointer w-14 h-14' src="/assets/nike-logo.png" alt="nike logo" />
              </Link>
              
            </div>
            <div className='xs:hidden sm:inline-flex flex items-center gap-8'>
                <Navbar />
            </div>
            <ul className='flex gap-3'>
              <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full'><BsSearch style={{ fontSize: '24px'}}/></li>
              <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full xs:hidden md:inline-flex'><HiOutlineHeart style={{ fontSize: '26px'}}/></li>
              <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full'><BsHandbag style={{ fontSize: '24px'}}/></li>
              <div className='lg:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                <li className='cursor-pointer bg-transparent p-3 hover:bg-slate-300 rounded-full md:hidden lg:hidden xl:hidden'>{ openMenu ? <GrClose style={{ fontSize: '24px'}}/> : <AiOutlineMenu style={{ fontSize: '24px'}}/>}</li>
              </div>
            </ul>
            
            {/* mobile nav */}
           { openMenu && 
           (<div className={`overflow-hidden absolute bottom-[-12px] top-0 right-0 z-1 md:hidden cursor-pointer bg-white  w-full h-screen pb-12 pl-4 duration-500 ${openMenu ? 'left-0' : 'left-[100%]'}`}>
            <div className='lg:hidden cursor-pointer p-5 flex justify-end' onClick={() => setOpenMenu(!openMenu)}>
                <span className='cursor-pointer sm:hidden'>{ openMenu && <GrClose/> }</span>
              </div>
              <Navbar/>
            </div>)
            }
        </div>
        
    </nav>
  )
}

export default Header;