import { urlFor } from '../sanity'
import Image from 'next/image';

const Slider = ({ heroProducts, popProducts, summerShop }) => {

  return (
    <ul className="flex items-center lg:justify-center lg:items-start overflow-auto snap-x snap-mandatory snap-center gap-4 mb-8"  >
      {
        heroProducts && heroProducts.map((hero) => (
          <li className='snap-center shrink-0 lg:shrink' key={hero._id}>
            <Image className='md:w-96' width={320} height={320} src={urlFor(hero.image).url()} alt="hero product images" />
            <h4 className='font-normal text-black pt-4 text-2xl'>{hero.name}</h4>
          </li>
        ))
      }
      {
        !heroProducts && popProducts && popProducts.map((item) => (
          <li className='snap-center shrink-0 lg:shrink' key={item._id}>
            <Image className='md:w-96' width={320} height={320} src={urlFor(item.image).url()} alt="popular images" />
            <h4 className='font-medium pt-4 text-base text-black'>{item.name}</h4>
            <h4 className='font-normal text-dark-gray'>{item.category}</h4>
            <p>${item.price}</p>
          </li>
        ))
      }
      {
        !heroProducts && !popProducts && summerShop && summerShop.map((item) => (
          <li className='snap-center shrink-0 lg:shrink' key={item._id}>
            <Image className='md:w-96' width={320} height={320} src={urlFor(item.image).url()} alt="summer images" />
            <h4 className='font-normal pt-4 text-black text-xl'>{item.name}</h4>
          </li>
        ))
      }

    </ul>
  )
}

export default Slider