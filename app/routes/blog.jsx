import PostsList from "../components/posts-list";
import { getPosts } from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import styles from "../styles/blog.css"

export function meta() {
  return [
      {title: `GuitarLa - Our Blog`},
      {description: `GuitarLA, Music and guitar sales blog`}
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

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <PostsList 
        posts={posts}
      />
    </main>
  )
}

export default Blog
