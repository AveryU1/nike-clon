import React from 'react'
import {
    customizeImage,
    firstAccess,
    nikeMemberShipMedium,
    nikeMembershipImage,
    shippingImage
} from '../public/assets'


const NikeMembership = () => {
    return (
        <div>
            <h2 className='text-2xl pb-4'>Sport Essentials</h2>
            <div className='relative pb-1'>
                <img src={nikeMembershipImage.src}
                    srcSet={`${nikeMembershipImage.src} 768w, ${nikeMemberShipMedium.src} 1280w`}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    alt="Nike Membership"
                />
                <div className='absolute bottom-4 pl-4 pb-2'>
                    <h3 className='text-light-gray text-5xl font-black uppercase leading-none'>Become a Member</h3>
                    <p className='text-light-gray text-normal font-medium my-6'>Sign Up for Free. Join the community.</p>
                    <div className='flex gap-2 mt-4'>
                        <button className='text-black bg-white px-6 py-2 rounded-full font-normal'>Join us</button>
                        <button className='text-black bg-white px-6 py-2 rounded-full font-normal'>Sign In</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='relative pb-1 mb-4'>
                    <img src={firstAccess.src} alt="" />
                    <div className='absolute bottom-4 pl-4 pb-2'>
                        <h3 className='text-black text-2xl font-normal capitalize leading-none'>Shop Member-exclusive <br /> styles.</h3>
                    </div>
                </div>
                <div className='relative pb-1 mb-4'>
                    <img src={shippingImage.src} alt="" />
                    <div className='absolute bottom-4 pl-4 pb-2'>
                        <h3 className='text-black text-2xl font-normal capitalize leading-none'>Free standard shipping on all orders.</h3>
                    </div>
                </div>
                <div className='relative pb-1 mb-4'>
                    <img src={customizeImage.src} alt="" />
                    <div className='absolute bottom-4 pl-4 pb-2'>
                        <h3 className='text-black text-2xl font-normal capitalize leading-none'>Customize your so-you shoe.</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NikeMembership