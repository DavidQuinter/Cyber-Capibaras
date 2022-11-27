import { useEffect, useState } from "react"
import { RandomReveal } from "react-random-reveal"
import CardGame from "../components/CardGame"
import { Preguntas } from "../components/Preguntas"

export default function Juego() {
  const [pregunta, setPregunta] = useState({
    id: 1, pregunta: "Pregunta 1", categoria: "cat", color: "bg-primary"
  })

  useEffect(() => {
    obtenerPregunta()
  }, [])

  function obtenerPregunta() {
    const random = Math.floor(Math.random() * Preguntas.length)
    setPregunta(Preguntas[random])
  }


  return (
    <div className={`container-fluid ${pregunta.color} vh-100 d-flex align-items-center`}>
      <CardGame pregunta={pregunta} obtenerPregunta={obtenerPregunta}/>
    </div>
  )
}