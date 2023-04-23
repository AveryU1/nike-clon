import React from 'react'
import Slider from '../features/Slider'
import { PopProductsHome } from '../typings'

interface Props {
    popProducts? : [PopProductsHome]
}

const PopularProducts = ({popProducts}: Props) => {
  return (
    <>  
        <h2 className='text-dark text-2xl font-medium mt-8'>Popular Right Now</h2>
        <Slider popProducts={popProducts}/>
    </>
  )
}

export default PopularProducts