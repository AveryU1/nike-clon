import React from 'react'
import Slider from '../features/Slider'



const PopularProducts = ({popProducts}) => {
  return (
    <>  
        <h2 className='text-dark text-2xl font-medium mt-8'>Popular Right Now</h2>
        <Slider popProducts={popProducts}/>
    </>
  )
}

export default PopularProducts