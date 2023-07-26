import React from 'react'
import Slider from '../features/Slider';


const SummerShop = ({ summerShop }) => {
    
  return (
    <div>
        <h3 className='text-2xl pb-4'>Nike Swim Essentials</h3>
        <Slider summerShop={summerShop} />
    </div>
  )
}

export default SummerShop