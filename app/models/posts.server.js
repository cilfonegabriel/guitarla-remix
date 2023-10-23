export async function getPosts(){
    const resp = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await resp.json()
}

export async function getPost(url){
    const resp = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await resp.json()
}