export async function getGuitars() {
    const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const result = await resp.json()
    return result
}