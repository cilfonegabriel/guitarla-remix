import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "../models/guitars.server"
import styles from "../styles/guitars.css"

export async function loader({ params }) {
  const { guitarUrl } = params
  const guitar = await getGuitar(guitarUrl)

  if(guitar.data.length === 0) {
    throw new Response('' , {
      status: 404,
      statusText: 'Guitar not found'
    })
  }

  return guitar
}

export function meta({data}) {

  if(!data) {
    return [
       {title: `GuitarLa - Guitar not found`},
       {description: `Guitars, guitar sales, guitar not found`}
    ];
  }

  return [
    { title: `GuitarLA - ${data.data[0].attributes.name}`},
    { description: `Guitars, guitar sales, guitars ${data.data[0].attributes.name}`}
  ];
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Guitar() {

  const guitar = useLoaderData()
  const { name, description, imagen, price } = guitar.data[0].attributes
  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${name}`} />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
      </div>
    </main>
  )
}

export default Guitar
