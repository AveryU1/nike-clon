import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='px-6 mt-6'>
      <div className="bg-[url('../public/assets/nike-banner.webp')] h-96 bg-center bg-cover bg-no-repeat" ></div>
      <section className='text-center'>
        <h1 className='uppercase text-black text-5xl font-extrabold py-8 '>Make Waves in air</h1>
        <p className='pb-8'>Amp your self-expression with the high-energy colors of the Air Max 90 Futura, VaporMax Plus, and more.</p>
      </section>
      <article className='text-left'>
        <button className='bg-black text-light-gray px-6 py-2 rounded-full'>Shop</button>
      </article>
      
    </div>
  )
}

export default Banner

