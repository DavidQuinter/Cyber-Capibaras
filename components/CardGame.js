import { RandomReveal } from "react-random-reveal"
import Image from "next/image"

export default function CardGame(props) {
  const { pregunta, obtenerPregunta , randomReveal} = props
  return (
    <div className="card bg-transparent p-5 align-items-center mx-auto card-game-style">
      <div className="card-header text-center">
        <Image src="/carpincho.png" alt="Imagen pregunta" width={150} height={150} />
        <div className="row">
          <div className="col-sm-12 text-light fs-1 fw-bold my-3">
            {pregunta.pregunta}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <button className="btn btn-warning my-3 rounded-pill" onClick={() => obtenerPregunta()}>
            Siguiente pregunta
          </button>
        </div>
      </div>
    </div>
  )
}
