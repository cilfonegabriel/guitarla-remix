export async function loader({ params }) {
  const { guitarUrl } = params

  console.log( guitarUrl )

  return{}

}

function Guitar() {
  return (
    <div>
      $guitarurl
    </div>
  )
}

export default Guitar
