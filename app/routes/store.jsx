

export async function loader(){
  const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const result = await resp.json()

  return {

}
}

function Store() {
  return (
    <div>
      desde store
    </div>
  )
}

export default Store
