import { getGuitars } from '../models/guitars.server'

export async function loader(){
  const guitars = await getGuitars()
  return guitars
}

function Store() {
  return (
    <div>
      desde store
    </div>
  )
}

export default Store
