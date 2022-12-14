import Link from "next/link";
import ArticuloPag from "../../components/Articulos/ArticuloPag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer"


export default function Articulo() {
  return (
    <div className="container my-4">
      <div>
        <Navbar />

        <Link href="/juego" className="btn bg-blue-dalt text-light hover-btn-color">
          <FontAwesomeIcon icon={faChevronLeft} /> &nbsp;
          Regresar al juego
        </Link>
      </div>
      <ArticuloPag />
      <Footer/>
    </div>
  )
}
