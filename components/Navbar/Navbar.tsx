import { useState } from 'react';
import { navLinks } from '../../constants';
import { MdArrowForwardIos } from 'react-icons/md'


const Navbar = () => {


  return (
    <>
          {
            navLinks.map(categories => (
              <div key={categories.id}>
                <div className='px-3 text-left md:cursor-pointer'>
                  <h3 className='py-7'>{categories.title}</h3>
                </div>
              </div>
            ))
          }
    </>
  )
}

export default Navbar