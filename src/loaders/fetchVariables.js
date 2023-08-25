export default async function VariablesLoader (user) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_FETCH_VARIABLES, {
        method : 'GET', 
        credentials: 'include', 
        headers : {
            'Authorization' : `Bearer ${accessToken}`
        }
    })
    return await request.json()
}