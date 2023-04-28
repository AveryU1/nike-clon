// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { NextPage } from 'next'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { CardShoes, HeroProduct, PopProductsHome, SummerShopProducts, TrendingProduct } from '../typings'
import { sanityClient } from '../sanity'
import Header from '../components/Navbar/Header'
import Footer from '../components/footer/Footer'




interface Props {
  heroProducts? : [HeroProduct],
  popProductsHome?: [PopProductsHome],
  trendingProduct?: [TrendingProduct],
  cardShoes?: [CardShoes],
  summerShop?: [SummerShopProducts]
}
const Home = ({heroProducts, popProductsHome, trendingProduct, cardShoes, summerShop}: Props) => {
  


  
  return(
  <div className='bg-light-gray pt-24'>
     <Header />
     <Banner cardShoes={cardShoes} />
     <Hero 
     heroProducts={heroProducts} 
     popProducts={popProductsHome}
     trendingProduct={trendingProduct} 
     cardShoes={cardShoes}
     summerShop={summerShop}
     />
    
     <Footer/>
  </div>
  
)
}

export default Home;

export const getServerSideProps = async() =>{
  const query = `*[_type == "heroProduct"] {
      name,
    _id,
      image,
      slug
    }`;
  
  const queryTrending: string = `*[_type == "trendingProduct"] {
    name,
    midText,
    _id,
    image,
    slug
  }`;

    const popProductsQuery = `*[_type == "popProductsHome"] {
      name, 
      _id,
      image,
      category,
      price, 
      slug
    }`

    const cardShoesQuery = `*[_type == "cardShoes"] {
      largeText,
      midText,
      image,
      _id
    }`
    

    const summerShopQuery = `*[_type == 'summerShop'] {
      name, 
      image
    }`
    const heroProducts = await sanityClient.fetch(query);
    const trendingProduct: string[] = await sanityClient.fetch(queryTrending);
    const popProductsHome = await sanityClient.fetch(popProductsQuery)
    const cardShoes = await sanityClient.fetch(cardShoesQuery)
    const summerShop = await sanityClient.fetch(summerShopQuery)
  return {
      props: {
          heroProducts,
          popProductsHome,
          trendingProduct,
          cardShoes,
          summerShop
      }
  }
}


