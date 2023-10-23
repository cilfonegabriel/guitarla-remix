export async function getGuitars() {
    const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const result = await resp.json()
    return result
}

export async function getGuitar(url){
    const resp = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    return await resp.json()
}