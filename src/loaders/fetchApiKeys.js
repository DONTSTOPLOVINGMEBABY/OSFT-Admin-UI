export default async function FetchApiKeys ( user ) {
    let {accessToken} = user
    let request = await fetch('http://localhost:3000/app/api-keys', {
        method: "GET", 
        credentials: 'include', 
        headers: {
            'Authorization' : `BEARER ${accessToken}`
        }
    })
    return await request.json()
}