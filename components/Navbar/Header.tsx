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
    <nav className='bg-slate-100'>
        <div className='flex items-center justify-between'>
            <div>
              <Link href='/'>
                  <img className='cursor-pointer h-9' src="/assets/nike-logo.png" alt="nike logo" />
              </Link>
            </div>
            <div className='md:flex hidden items-center gap-8'>
                <Navbar />
            </div>
            <ul className='flex gap-4'>
              <li className='cursor-pointer'><BsSearch/></li>
              <li className='cursor-pointer md:flex hidden'><HiOutlineHeart/></li>
              <li className='cursor-pointer'><BsHandbag/></li>
              <div className='lg:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
                <span className='cursor-pointer'>{ openMenu ? <GrClose/> : <AiOutlineMenu/>}</span>
              </div>
            </ul>
            
            {/* mobile nav */}
            <div className={`md:hidden absolute w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${openMenu ? 'left-0' : 'left-[-100]'}`}>
              <Navbar/>
            </div>
        </div>
        
    </nav>
  )
}

export default Header;