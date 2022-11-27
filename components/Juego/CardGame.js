import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export default function CardGame(props) {
  const { pregunta, obtenerPregunta } = props
  return (
    <div className="card bg-transparent my-3 align-items-center mx-auto card-game-style">
      <div className="card-header">
        <Link href={`/articulos/${pregunta.pregunta}`} className="question-icon text-light text-decoration-none fw-bold">
          <FontAwesomeIcon icon={faCircleQuestion} /> &nbsp;
          ¿Quieres leer más?
        </Link>
      </div>
      <div className="card-body text-center">
        <Image src={pregunta.imagen} alt="Imagen pregunta" width={150} height={150} />
        <div className="row">
          <div className="card-title col-sm-12 text-light fs-1 fw-bold my-3">
            ¿{pregunta.pregunta}?
          </div>
        </div>
      </div>
      <div className="row">
        <button className="btn btn-light my-3 rounded-pill text-dark fw-bold" onClick={() => obtenerPregunta()}>
          <FontAwesomeIcon icon={faShuffle} /> &nbsp;
          Siguiente pregunta
        </button>
      </div>
    </div>
  )
}
