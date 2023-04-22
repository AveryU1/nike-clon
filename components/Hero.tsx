import { SanityClient } from 'next-sanity'
import React from 'react'
import {sanityClient, urlFor} from "../sanity"
import { HeroProduct } from '../typings';
import Slider from '../features/Slider';
import {basketballShoes, goWildHome} from "../public/assets"
import Image from 'next/image';



interface Props {
  heroProducts : [HeroProduct]
}


const Hero = ({heroProducts}: Props)  => {
  
    console.log(heroProducts);
  return (
    <section className='px-6'> 
      <Slider heroProduct={heroProducts}/>
      <div className='mb-8'>
        <h2 className='text-2xl pb-4'>Sport Essentials</h2>
        <div className='w-full' >
          <div className='relative pb-1'>
            <img  src={basketballShoes.src} alt="" />
            <div className='absolute bottom-4 pl-4'>
              <h3 className='text-light-gray text-lg'>Nike Basketball</h3>
              <p className='text-light-gray text-xl font-medium'>Presenting the <br /> Cosmic Unity 3</p>
              <button className='text-black bg-white px-6 py-2 mt-6 rounded-full font-medium'>Shop</button>
            </div>
          </div>
          <div className='relative pb-1'>
            <img src={goWildHome.src} alt="" />
            <div className='absolute bottom-4 pl-4'>
              <h3 className='text-light-gray text-xl font-medium'>Outdoor Wear For <br />Your  Wildest Adventures</h3>
              <button className='text-black bg-white px-6 py-2 mt-6 rounded-full font-medium'>Shop</button>
            </div>
          </div>
          
          
        </div>
      </div>
      
    </section>
  )
}

export default Hero

