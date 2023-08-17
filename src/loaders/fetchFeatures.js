export default async function FeaturesLoader (user) {
    let {accessToken} = user
    let request = await fetch('http://localhost:3000/app/features', {
        method: 'GET', 
        headers: {
            'Authorization' : `BEARER ${accessToken}`
        }
    }) 
    return await request.json()
}
