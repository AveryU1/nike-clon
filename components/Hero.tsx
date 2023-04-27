
import React from 'react'
import { CardShoes, HeroProduct, PopProductsHome, SummerShopProducts, TrendingProduct } from '../typings';
import Slider from '../features/Slider';
import PopularProducts from '../ui/PopularProducts';
import Trending  from '../ui/Trending';
import FeaturedFootwear from './FeaturedFootwear';
import SummerShop from '../ui/SummerShop';
import SportEssentials from '../ui/SportEssentials';
import NikeMembership from './NikeMembership';



interface Props {
  heroProducts? : [HeroProduct],
  trendingProduct?: [TrendingProduct],
  popProducts?: [PopProductsHome],
  cardShoes?: [CardShoes],
  summerShop?: [SummerShopProducts]
}


const Hero = ({heroProducts, popProducts , trendingProduct, cardShoes, summerShop}: Props)  => {
  console.log(summerShop);
  return (
    <section className='px-6'> 
      <Slider heroProduct={heroProducts}/>
      <div className='w-full' >
        <SportEssentials />
        <FeaturedFootwear cardShoes={cardShoes}/>
        <Trending trendingProduct={trendingProduct}/> 
        <PopularProducts popProducts={popProducts}/>
        <SummerShop summerShop={summerShop} />
        <NikeMembership />
      </div>
      
      
    </section>
  )
}

export default Hero

