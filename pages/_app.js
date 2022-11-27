import Head from "next/head"
import "../sass/index.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Con pelos en las manos - Educación sexual integral para adolescentes</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
