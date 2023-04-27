import React from 'react'
import { SummerShopProducts } from '../typings'
import Slider from '../features/Slider';

interface Props {
    summerShop?: [SummerShopProducts]
}

const SummerShop = ({summerShop}: Props) => {
    console.log(summerShop);
  return (
    <div>
        <h3 className='text-black text-2xl font-normal'>Nike Swim Essentials</h3>
        <Slider summerShop={summerShop} />
    </div>
  )
}

export default SummerShop