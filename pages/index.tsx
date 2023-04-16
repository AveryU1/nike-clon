// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { NextPage } from 'next'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { HeroProduct } from '../typings'
import { sanityClient } from '../sanity'
import Header from '../components/Navbar/Header'



interface Props {
  heroProducts : [HeroProduct]
}
const Home = ({heroProducts}: Props) => {
  console.log(heroProducts);
  
  
return(
  <div className='bg-light-gray'>
    <Header />
   <Banner />
   <Hero heroProducts={[]} />
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


