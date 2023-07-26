// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Header from "../components/Navbar/Header";
import Footer from "../components/footer/Footer";
import { sanityClient } from "../sanity";

const Home = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const getInfoAboutBanner = async () => {
      try {
        // Verifica si la consulta está obteniendo los datos correctamente
        const cardShoes = await sanityClient.fetch(`*[_type == "cardShoes"]`);
        //console.log(cardShoes);

        // Actualiza el estado con los datos obtenidos
        setBanner(cardShoes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getInfoAboutBanner();
  }, []);


    return (
        <div className="bg-light-gray">
            <Header />
            <Banner banner={banner}/>
            <Hero banner={banner}/>

            <Footer />
        </div>
    );
};

export default Home;

// export const getServerSideProps = async () => {
//     const query = `*[_type == "heroProduct"] {
//       name,
//     _id,
//       image,
//       slug
//     }`;
// };
