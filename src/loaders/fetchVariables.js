export default async function VariablesLoader (user) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/app/variables', {
        method : 'GET', 
        credentials: 'include', 
        headers : {
            'Authorization' : `Bearer ${accessToken}`
        }
    })
    return await request.json()
}