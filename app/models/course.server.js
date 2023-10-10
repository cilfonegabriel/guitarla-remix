export async function getCourse() {
    const resp = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    return await resp.json()
}