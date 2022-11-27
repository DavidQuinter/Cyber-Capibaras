import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AbousUs'

export default function Home() {
  return <>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <div>
      <AboutUs></AboutUs>
    </div>
  </main>
  </>
  
}
