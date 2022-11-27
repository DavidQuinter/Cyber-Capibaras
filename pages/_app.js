import Head from "next/head"
import '../styles/Navbar.css'
import '../styles/footer.css'
import "../sass/index.scss"
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Con pelos en las manos - Educación sexual integral para adolescentes</title>
      </Head>
      {/* <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossOrigin="anonymous"
    /> */}
      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp
