import { useState, useEffect } from 'react'
import PopularProducts from '../ui/PopularProducts';
import Trending  from '../ui/Trending';
import FeaturedFootwear from './FeaturedFootwear';
import SummerShop from '../ui/SummerShop';
import SportEssentials from '../ui/SportEssentials';
import NikeMembership from './NikeMembership';
import { sanityClient, urlFor } from '../sanity';
import Slider from '../features/Slider';


const Hero = ({ banner })  => {

  const [heroProducts, setHeroProducts] = useState([])
  const [popProducts, setPopProducts] = useState([])
  const [summerShop, setSummerShop] = useState([])
  const [trending, setTrending] = useState([])

  useEffect(() => {
    const getDataAboutProducts = async () => {
      const products = await sanityClient.fetch(`*[_type == "heroProduct"]`)
      setHeroProducts(products)
    }
    getDataAboutProducts();
  }, [])


  useEffect(() => {
    const getDataAboutProducts = async () => {
      const productPop = await sanityClient.fetch(`*[_type == "popProductsHome"]`)
      setPopProducts(productPop)
    }
    getDataAboutProducts();
  }, [])


  useEffect(() => {
    const getDataAboutSummer = async () => {
      const summerData = await sanityClient.fetch(`*[_type == "summerShop"]`)
      setSummerShop(summerData)
    }
    getDataAboutSummer();
  }, [])


  useEffect(() => {
    const getDataAboutTrending = async () => {
      const trendingData = await sanityClient.fetch(`*[_type == "trendingProduct"]`)
      setTrending(trendingData)
    }
    getDataAboutTrending();
  }, [])
  

  return (
    <section className='px-6'> 
      <Slider heroProducts={heroProducts} popProducts={popProducts} summerShop={summerShop}/>
      <div className='w-full' >
        <SportEssentials />
        <FeaturedFootwear banner={banner}/>
        <Trending trendingProduct={trending}/> 
        <PopularProducts popProducts={popProducts}/>
        <SummerShop summerShop={summerShop}  />
        <NikeMembership />
      </div>
      
      
    </section>
  )
}

export default Hero

