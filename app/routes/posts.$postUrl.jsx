import { getPost } from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import { formatDate } from "../utils/helpers"
import styles from "../styles/blog.css"

export function links() {
    return[
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
}

export function meta({data}) {

    if(!data) {
      return [
         {title: `GuitarLa - No post found`},
         {description: `Guitars, guitar sales, guitar not found`}
      ];
    }
  
    return [
      { title: `GuitarLA - ${data.data[0].attributes.title}`},
      { description: `Guitars, guitar sales, entry ${data.data[0].attributes.title}`}
    ];
}

export async function loader ({params}){
    const { postUrl } = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No post found'
        })
    }

    return post
}

function Post() {
    const post=useLoaderData()
    const {titulo, contenido, imagen, publishedAt } = post.data[0].attributes
    return (
        <article className="contenedor post mt-3">
            <img className="imagen" src={ imagen.data.attributes.url }  alt={`imagen blog ${titulo}`} />
                <div className="contenido">
                    <h3>{titulo}</h3>
                    <p className='fecha'>{formatDate(publishedAt)}</p>
                    <p className="texto">{contenido}</p>
                </div>
        </article>
    )
}

export default Post
