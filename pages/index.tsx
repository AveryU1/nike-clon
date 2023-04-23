// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { NextPage } from 'next'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { HeroProduct, PopProductsHome, TrendingProduct } from '../typings'
import { sanityClient } from '../sanity'
import Header from '../components/Navbar/Header'
import Footer from '../components/footer/Footer'




interface Props {
  heroProducts? : [HeroProduct],
  popProductsHome?: [PopProductsHome],
  trendingProduct?: [TrendingProduct]
}
const Home = ({heroProducts, popProductsHome, trendingProduct}: Props) => {
  


  
  return(
  <div className='bg-light-gray'>
     <Header />
     <Banner />
     <Hero heroProducts={heroProducts} popProducts={popProductsHome}trendingProduct={trendingProduct}/>
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
    const heroProducts = await sanityClient.fetch(query);
  
  const trendingProduct: string[] = await sanityClient.fetch(queryTrending);
    const popProductsHome = await sanityClient.fetch(popProductsQuery)
  return {
      props: {
          heroProducts,
          popProductsHome,
          trendingProduct
      }
  }
}


