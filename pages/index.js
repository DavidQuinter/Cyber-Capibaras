import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AbousUs'
import Footer from '../components/footer'

export default function Home() {
  return <>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <div>
      <Carousel></Carousel>
    </div>
    <Footer></Footer>
  </main>
  </>
  
}
