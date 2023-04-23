import React, { useEffect, useRef, useState } from 'react'
import { HeroProduct, PopProductsHome } from '../typings';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity'
interface Props {
  heroProduct? : [HeroProduct],
  popProducts?: [PopProductsHome]
}

const Slider = ({heroProduct, popProducts}: Props) => {
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      setSliderWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [heroProduct, popProducts]);
  
  return (
    <div className="overflow-x-hidden py-4 mb-8" ref={carousel} >
      <motion.div 
      className='flex gap-4' 
      drag="x" 
      dragConstraints={{right: 0, left: -sliderWidth}}
      >
        {
          heroProduct ? (
            heroProduct.map((item) => (
              <div className='min-w-full' key={item._id}>
               <img  src={urlFor(item.image)!.url()} alt="hero product images"/>
               <h4 className='font-normal text-black pt-4 text-2xl'>{item.name}</h4>
             </div>
            ))
          ) : (
            popProducts && (

              popProducts.map((item) => (
                <div className='min-w-full' key={item._id}>
                  <img src={urlFor(item.image).url()} alt="" />
                  <h4 className='font-medium pt-4 text-base text-black'>{item.name}</h4>
                  <h4 className='font-normal text-dark-gray'>{item.category}</h4>
                  <p>${item.price}</p>
                </div>
              ))
            )
          )
        }
      </motion.div>
    </div>
  )
}

export default Slider