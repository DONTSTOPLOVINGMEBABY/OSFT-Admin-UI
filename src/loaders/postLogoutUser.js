export default async function LogoutUser () {
    let request = await fetch('http://localhost:3000/auth/logout', {
        method : 'DELETE', 
        credentials : 'include', 
    })
    if (!request.ok){
        let error = await request.json()
        throw new Error(error.errors)
    }
    return await request.json()
}