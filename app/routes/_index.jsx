import {getGuitars} from '../models/guitars.server'
import {getPost} from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import GuitarsList from '../components/guitars-list'
import stylesGuitars from '../styles/guitars.css'

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitars
    }
  ]
}

export async function loader() {
  const [guitars, posts] = await Promise.all([
    getGuitars(),
    getPost()
  ])

  return {
    guitars: guitars.data,
    posts: posts.data
  }
}


function Index() {

  const {guitars} = useLoaderData()

  return (
    <>
      <main className='contendor'>
        <GuitarsList
          guitars = {guitars}
        />
      </main>
    </>
  )
}

export default Index
