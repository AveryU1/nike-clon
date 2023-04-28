import React from 'react'
import { CardShoes } from '../typings'

interface Props {
    cardShoes?: [CardShoes]
}

const FeaturedFootwear = ({ cardShoes }: Props) => {
    const firstElement = cardShoes && cardShoes.slice(0, 1)

    return (
        <div className='mb-8'>
            <h3 className='text-black text-2xl mb-4'>Featured Footwear</h3>
            {
                firstElement && firstElement.map((item) => (
                    <div key={item._id}>
                        <div className="bg-[url('../public/assets/featured-footwear.webp')] h-[27rem] bg-center bg-cover bg-no-repeat" ></div>
                        <section className='text-center'>
                            <h3 className='uppercase text-black text-5xl font-extrabold py-8'>{item.largeText}</h3>
                            <p className="pb-8">{item.midText}</p>
                        </section>
                        <article className='text-left md:text-center'>
                            <button className='bg-black text-light-gray px-6 py-2 rounded-full'>Shop Air Max</button>
                        </article>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturedFootwear