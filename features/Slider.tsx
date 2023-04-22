import React, { useEffect, useRef, useState } from 'react'
import { HeroProduct } from '../typings'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
interface Props {
  heroProduct : [HeroProduct]
}

const Slider = ({heroProduct}: Props) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carousel.current) {
      setSliderWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [heroProduct]);
  console.log(heroProduct);
  return (
    <div className="overflow-x-hidden py-4 mb-8" ref={carousel} >
      <motion.div 
      className='flex gap-4' 
      drag="x" 
      dragConstraints={{right: 0, left: -sliderWidth}}
      >
        {
          heroProduct.map((item) => (
            <div className='min-w-full'>
              <img  src={urlFor(item.image)!.url()} alt="hero product images"/>
              <h4 className='font-normal pt-4 text-2xl'>{item.name}</h4>
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Slider