import React from 'react'
import { basketballShoes, goWildHome } from "../public/assets"


const SportEssentials = () => {
    return (
        <div className='mb-8'>
            <h2 className='text-2xl pb-4'>Sport Essentials</h2>
            <div className='flex flex-col md:flex-row md:justify-center'>
                <div className='relative pb-1 lg:w-1/2'>
                    <img className='h-full w-full' src={basketballShoes.src} alt="" />
                    <div className='absolute bottom-4 pl-4 pb-2'>
                        <h3 className='text-light-gray text-lg'>Nike Basketball</h3>
                        <p className='text-light-gray text-xl font-medium'>Presenting the <br /> Cosmic Unity 3</p>
                        <button className='text-black bg-white px-6 py-2 mt-6 rounded-full font-medium'>Shop</button>
                    </div>
                </div>
                <div className='relative pb-1 lg:w-1/2'>
                    <img className='h-full w-full' src={goWildHome.src} alt="" />
                    <div className='absolute bottom-4 pl-4 pb-2'>
                        <h3 className='text-light-gray text-xl font-medium'>Outdoor Wear For <br />Your  Wildest Adventures</h3>
                        <button className='text-black bg-white px-6 py-2 mt-6 rounded-full font-medium'>Shop</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SportEssentials