import React, { useEffect, useRef, useState } from 'react'
import { HeroProduct, PopProductsHome, SummerShopProducts } from '../typings';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity'

interface Props {
  heroProduct? : [HeroProduct],
  popProducts?: [PopProductsHome],
  summerShop?: [SummerShopProducts]
}
const Slider = ({heroProduct, popProducts, summerShop}: Props) => {
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      setSliderWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  
  return (
    <div className="overflow-x-hidden py-4 mb-8" ref={carousel} >
      <motion.div 
      className='flex gap-4 justify-center' 
      drag="x" 
      dragConstraints={{right: 0, left: -sliderWidth}}
      >
        {
          heroProduct && heroProduct.map((item) => (
            <div className='min-w-full md:min-w-fit' key={item._id}>
             <img className='md:w-96'  src={urlFor(item.image)!.url()} alt="hero product images"/>
             <h4 className='font-normal text-black pt-4 text-2xl'>{item.name}</h4>
           </div>
          ))
        }
        {
          !heroProduct && popProducts && popProducts.map((item, indx) => (
            <div className='min-w-full md:min-w-fit' key={indx}>
              <img className='md:w-96' src={urlFor(item.image).url()} alt="" />
              <h4 className='font-medium pt-4 text-base text-black'>{item.name}</h4>
              <h4 className='font-normal text-dark-gray'>{item.category}</h4>
              <p>${item.price}</p>
            </div>
          ))
        }
        {
          !heroProduct && !popProducts && summerShop && summerShop.map((item, indx) => (
            <div className='min-w-full md:min-w-fit' key={indx}>
              <img className='md:w-96' src={urlFor(item.image).url()} alt="" />
              <h4 className='font-normal pt-4 text-black text-xl'>{item.name}</h4>
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Slider