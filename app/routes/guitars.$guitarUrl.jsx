import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "../models/guitars.server"

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

function Guitar() {

  const guitar = useLoaderData()
  const { name, description, imagen, price } = guitar.data[0].attributes
  return (
    <div className ="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${name}`} />

      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
        
        <form className="formulario">
          <label htmlFor="cantidad">Amount</label>

          <select id="cantidad">
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type = "submit"
            value= "Add to cart"
          />
          
        </form>
      </div>
    </div>
  )
}

export default Guitar
