import { getGuitars } from '../models/guitars.server'
import { useLoaderData } from '@remix-run/react'
import Guitar from '../components/guitar'
import styles from '../styles/guitars.css'

export function meta() {
  return [
    { title:'GuitarLA - Guitar Store' },
    { description:'GuitarLA - Our guitar collection' }
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
  const guitars = await getGuitars()
  return guitars.data
}

function Store() {

  const guitars = useLoaderData()

  return (
    <main className='contenedor'>
      <h2 className='heading'>Our collection</h2>

      {guitars.length && (
        <div className='guitarras-grid'>
          {guitars.map(guitar =>(
            <Guitar
              key={guitar.id}
              guitar={guitar.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store
