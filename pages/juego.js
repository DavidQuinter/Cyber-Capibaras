import { useEffect, useState } from "react"
import CardGame from "../components/Juego/CardGame"
import { Preguntas } from "../components/Juego/Preguntas"

export default function Juego() {
  const [pregunta, setPregunta] = useState(
    {
      id: 1,
      pregunta: "Pregunta 1",
      categoria: "cat",
      color: "bg-primary",
      articulo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga distinctio eveniet exercitationem dolores aliquam, reprehenderit dolore voluptates placeat odio impedit, enim asperiores laboriosam optio ea officia minima nobis dicta facere. Quis sed accusamus in adipisci dolorum odit at animi illo odio vitae ducimus earum maxime, facilis corrupti laboriosam laudantium doloremque neque dicta distinctio quos aliquid est molestiae unde quasi. Id quasi perferendis veritatis? Nemo accusamus doloremque, consequatur iure fuga saepe molestias minima, tempore aspernatur, ducimus alias quidem optio beatae libero!",
      links: ["https://sg.com.mx/buzz/hack-equality-2da-edicion", "https://sg.com.mx/buzz/hack-equality-2da-edicion", "https://sg.com.mx/buzz/hack-equality-2da-edicion"]
    }
  )

  useEffect(() => {
    obtenerPregunta()
  }, [])

  function obtenerPregunta() {
    const random = Math.floor(Math.random() * Preguntas.length)
    setPregunta(Preguntas[random])
  }


  return (
    <div className={`container-fluid bg-${pregunta.color} vh-100 d-flex align-items-center`}>
      <CardGame pregunta={pregunta} obtenerPregunta={obtenerPregunta}/>
    </div>
  )
}