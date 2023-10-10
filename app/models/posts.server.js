export async function getPosts(){
    const resp = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await resp.json()
}