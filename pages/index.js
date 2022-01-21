import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boplas Industries Limited</title>
        <meta name="description" content="Boplas E-commerce" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Featured/>


    </div>
    )
    }