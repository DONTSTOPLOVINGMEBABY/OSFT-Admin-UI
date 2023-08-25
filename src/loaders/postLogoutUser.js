export default async function LogoutUser () {
    let request = await fetch(import.meta.env.VITE_POST_LOGOUT_USER, {
        method : 'DELETE', 
        credentials : 'include', 
    })
    if (!request.ok){
        let error = await request.json()
        throw new Error(error.errors)
    }
    return await request.json()
}