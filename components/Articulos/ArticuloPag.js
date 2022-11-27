import Image from "next/image";
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
  
  const { query } = useRouter();

  useEffect(() => {
    if (query.articulo) {
      const preguntaEncontrada = Preguntas.find(pregunta => pregunta.pregunta == query.articulo)
      console.log("🚀 ~ file: ArticuloPag.js ~ line 23 ~ useEffect ~ query.articulo", query.articulo)
      setPreguntaData(preguntaEncontrada)
    }
  }, [query])

  if (!preguntaData) return null;

  return (
    <>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 mb-2">
          <Image src="/logo.png" width={400} height={200} className="mx-auto d-flex align-items-center my-auto"/>
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center my-auto">
          <h2 className={`fs-1 text-${preguntaData.color}`}>¿{preguntaData.pregunta}?</h2>
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
                  <li key={link.linkUrl}><a href={link.linkUrl} className="text-blue-dalt">{link.tituloLink}</a></li>
                )
              })
            }
          </ul>
        </section>
      </article>
    </>
  )
}
