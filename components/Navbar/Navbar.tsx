import { useState } from 'react';
import { navLinks } from '../../constants';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'


const Navbar = () => {

  const [subMenu, setSubMenu] = useState('');

  return (
    <>
          {
            navLinks.map((categories) => (
              <div key={categories.id}>
                <div className='px-3 text-left md:cursor-pointer group'>
                  <h3 className='py-7 flex justify-between items-center' onClick={() => { subMenu !== categories.title ? setSubMenu(categories.title) : setSubMenu('')}}>{categories.title} 
                      <span className="lg:hidden hover:rotate-90 ">
                          <MdKeyboardArrowRight style={{ fontSize: '20px'}}/>
                      </span>
                  </h3>
                  {
                    categories.submenu && (
                      <div>
                        <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                          <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                            {
                              categories.fields.map((category) => (
                                <div key={category.title}>
                                  <h3 className='text-base font-medium'>{category.title}</h3>
                                  {
                                    category.options.map((option) => (
                                      <li className='text-sm text-zinc-400 my-2.5 cursor-pointer hover:text-black'>{option.name}</li>
                                    ))
                                  }
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>

                {/* mobile menu */}

                <div className={`${subMenu === categories.title ? 'md:hidden' : 'hidden'}`}>
                  {
                    categories.fields.map((category) => (
                      <div>
                        <div>
                          <h3 className='py-4 pl-7 font-medium md:pr-0 pr-5 ' >{category.title}
                           
                          </h3>
                          <div>
                          {
                            category.options.map((option) => (
                              <li className='py-3 pl-14 text-sm text-zinc-400 my-2.5 cursor-pointer hover:text-black'>{option.name}</li>
                            ))
                          }
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
    </>
  )
}

export default Navbar