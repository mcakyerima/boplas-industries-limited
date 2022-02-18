import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured';
import Products from '../components/ProductsList';

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boplas Industries Limited</title>
        <meta name="description" content="Boplas E-commerce" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Featured/>
      <Products productList={productList}/>
    </div>
    )
    }

    // in next js, we can use server side rendering to make an api request using axios and then pass it as props to our components

    export const getServerSideProps = async () => {
      const response = await axios.get("http://localhost:3000/api/product")
      return {
        props: {
          productList: response.data
        }
      }
    
    }