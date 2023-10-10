import {getGuitars} from '../models/guitars.server'
import {getPosts} from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import GuitarsList from '../components/guitars-list'
import PostsList from '../components/posts-list'
import stylesGuitars from '../styles/guitars.css'
import stylesPosts from '../styles/blog.css'


export function meta(){

}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitars
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    }
  ]
}

export async function loader() {
  const [guitars, posts] = await Promise.all([
    getGuitars(),
    getPosts()
  ])

  return {
    guitars: guitars.data,
    posts: posts.data
  }
}


function Index() {

  const {guitars, posts} = useLoaderData();

  return (
    <>
      <main className='contenedor'>
        <GuitarsList
          guitars = {guitars}
        />
      </main>

      <section className='contenedor'>
        <PostsList 
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index
