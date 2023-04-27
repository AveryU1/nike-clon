import { useState } from 'react';
import Link from 'next/link';
import { footerLinks, termsFooter } from '../../constants/footerLinks';
import FooterAccordion from './FooterAccordion';
import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im';
import { TfiYoutube } from 'react-icons/tfi';

const Footer = () => {

  const [onAccordion, setOnAccordion] = useState<boolean>(false);

  const handleChanges = (newValue: boolean) => {
    setOnAccordion(newValue);
  }

  return (
    <footer className='bg-black w-full sm:min-h-[200px]'>
        <div className='flex gap-1 xs:flex-col md:flex-row justify-between xs:mx-auto px-1 pt-10 overflow-hidden '>
          <div className='py-2 px-4'>
            {
              footerLinks[0].fields.map((categories, idx) => (
                <div key={idx} className='leading-[1.7]'>
                <ul>
                  <li className='mb-[3px]'><Link href='/' className='text-white text-sm mb-3 font-medium uppercase hover:text-[#7e7e7e]'>{categories.name}</Link></li>
                </ul>
                </div>
              ))
            }
          </div>
          <div>
            <div className='flex xs:flex-col md:flex-row gap-6 justify-start'>
              <FooterAccordion onAccordion={onAccordion} setOnAccordion={handleChanges}/>
            </div>
          </div>
          <div className='flex justify-between items-end'>
            <div className='social-media'>
              <ul className='flex'>
                <li className='btn-social'><Link href='/' ><ImTwitter style={{width: '30px', fontSize: '20px'}}/></Link></li>
                <li className='btn-social'><Link href='/' ><ImFacebook style={{width: '30px', fontSize: '20px'}}/></Link></li>
                <li className='btn-social'><Link href='/' ><TfiYoutube style={{width: '30px', fontSize: '20px'}}/></Link></li>
                <li className='btn-social'><Link href='/' ><ImInstagram style={{width: '30px', fontSize: '20px'}}/></Link></li>
              </ul>
            </div>
            <div className='sm:relative bottom-3 xs:pl-4'>
              <div className='text-white text-xs mb-3 font-medium'>
                <p>United States</p>
                <p>2023 Nike, Inc. All Rights Reserves </p>
              </div>
            </div>
            <div className='xs:pl-4'>
              <div>
                <ul className='md:flex flex-wrap'>
                {
                  termsFooter.map((terms) => (
                    <li key={terms.names} className='text-[#7e7e7e] text-xs mb-3 font-medium hover:text-white  mr-1 '>{terms.names}</li>
                  ))
                }
                </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer