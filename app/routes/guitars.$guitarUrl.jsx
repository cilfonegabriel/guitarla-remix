import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "../models/guitars.server"

export async function loader({ params }) {
  const { guitarUrl } = params

  const guitar = await getGuitar(guitarUrl)

  return guitar

}

function Guitar() {

  const guitar = useLoaderData()
  console.log(guitar)
  return (
    <div>
      $guitarurl
    </div>
  )
}

export default Guitar
