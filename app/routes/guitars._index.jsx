import { getGuitars } from '../models/guitars.server'
import { useLoaderData } from '@remix-run/react'
import GuitarsList from '../components/guitars-list'

export function meta() {
  return [
    { title:'GuitarLA - Guitar Store' },
    { description:'GuitarLA - Our guitar collection' }
  ];
}

export async function loader(){
  const guitars = await getGuitars()
  return guitars.data
}

function Store() {
  const guitars = useLoaderData()
  return (
      <GuitarsList 
        guitars = {guitars}
      />
  )
}

export default Store
