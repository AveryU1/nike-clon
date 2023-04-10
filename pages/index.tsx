// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { NextPage } from 'next'
<<<<<<< HEAD
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { HeroProduct } from '../typings'
import { sanityClient } from '../sanity'
import { useEffect } from 'react'


interface Props {
  heroProducts : HeroProduct[]
}
const Home: NextPage = () => {
  
return(
  <div className='bg-light-gray'>
   <Banner />
   <Hero heroProducts={[]} />
=======
import Header from '../components/Navbar/Header';


const Home: NextPage = () => (
  <div>
    <Header/>
>>>>>>> bd7f29a81d80cc0ac7152e74ba15c0a2d0011aca
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
  
  const heroProducts = await sanityClient.fetch(query);
  return {
      props: {
          heroProducts
      }
  }

}


