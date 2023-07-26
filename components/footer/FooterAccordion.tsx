
import { footerLinks } from "../../constants/footerLinks"
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import Link from 'next/link';



const FooterAccordion = () => {


    const footerAcordion = footerLinks.slice(1); 


    return (
    < >
        {
            footerAcordion.map((services) => (
                <div key={services.id} className='text-white '>
                    <div className='flex justify-start items-center cursor-pointer' >
                    <button className='uppercase xs:p-4'>{services.name}</button>
                    {/* <span className='hidden'>{!onAccordion ? <CgMathPlus /> : <CgMathMinus/>}</span>   */}
                </div>
                <div>
                    <ul className='xs:pl-4'>
                    {
                        services.fields.map((options, idx) => (
                        <li key={idx} className='mb-[3px]'><Link href='/' className='text-[#7e7e7e] text-xs mb-3 font-medium hover:text-white' >{options.name}</Link></li>
                        ))
                    }
                    </ul>
                </div>
                </div>
            ))
            }
    </>
)
}

export default FooterAccordion