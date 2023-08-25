export default async function FetchApiKeys ( user ) {
    let {accessToken} = user
    let request = await fetch(import.meta.env.VITE_FETCH_API_KEYS , {
        method: "GET", 
        credentials: 'include', 
        headers: {
            'Authorization' : `BEARER ${accessToken}`
        }
    })
    return await request.json()
}