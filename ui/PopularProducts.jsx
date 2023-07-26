import React from 'react'
import Slider from '../features/Slider'



const PopularProducts = ({popProducts}) => {
  return (
    <>  
        <h2 className='text-2xl pb-4'>Popular Right Now</h2>
        <Slider popProducts={popProducts}/>
    </>
  )
}

export default PopularProducts