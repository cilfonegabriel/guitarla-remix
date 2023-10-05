import { Link } from "@remix-run/react"

export function Guitar({guitar}) {

    const { description, imagen, price, url, name } = guitar


  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitar &{name}`} />
        <div className="contenido">
            <h3>{name}</h3>
            <p className="descripcion">{description}</p>
            <p className="precio">${price}</p>

            <Link className="enlace" to={`/guitars/${url}`}>
                See Products
            </Link>
        </div>
    </div>
  )
}

export default Guitar
