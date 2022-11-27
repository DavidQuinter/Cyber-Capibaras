import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Preguntas } from "../Juego/Preguntas";

export default function ArticuloPag() {
  const [preguntaData, setPreguntaData] = useState(
    {
      id: 1,
      pregunta: "Pregunta 1",
      categoria: "cat",
      color: "bg-primary",
      articulo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga distinctio eveniet exercitationem dolores aliquam, reprehenderit dolore voluptates placeat odio impedit, enim asperiores laboriosam optio ea officia minima nobis dicta facere. Quis sed accusamus in adipisci dolorum odit at animi illo odio vitae ducimus earum maxime, facilis corrupti laboriosam laudantium doloremque neque dicta distinctio quos aliquid est molestiae unde quasi. Id quasi perferendis veritatis? Nemo accusamus doloremque, consequatur iure fuga saepe molestias minima, tempore aspernatur, ducimus alias quidem optio beatae libero!",
      links: ["https://sg.com.mx/buzz/hack-equality-2da-edicion", "https://sg.com.mx/buzz/hack-equality-2da-edicion", "https://sg.com.mx/buzz/hack-equality-2da-edicion"]
    }
  )
  console.log("🚀 ~ file: ArticuloPag.js ~ line 16 ~ ArticuloPag ~ preguntaData", preguntaData)
  const { query } = useRouter();
  console.log(query.articulo)

  useEffect(() => {
    if (query.articulo) {
      const preguntaEncontrada = Preguntas.find(pregunta => pregunta.pregunta == query.articulo)
      setPreguntaData(preguntaEncontrada)
    }
  }, [query.articulo])

  if (!preguntaData) return null;

  return (
    <>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 mb-2">
          <img src="https://storage.lacapitalmdp.com/2022/09/educacion-sexual-1024x593.jpg" alt={preguntaData.pregunta} className="img-article" />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center my-auto">
          <h2 className="fs-1">{preguntaData.pregunta}</h2>
          <h3>Categoría: {preguntaData.categoria}</h3>
        </div>
      </div>
      <article className="row mt-5">
        <p>
          {preguntaData.articulo}
        </p>
        <section className="mt-3">
          <h5>Aprende más del tema:</h5>
          <ul>
            {
              preguntaData.links.map((link) => {
                return(
                  <li key={link}><a href={link}>{link}</a></li>
                )
              })
            }
          </ul>
        </section>
      </article>
    </>
  )
}
