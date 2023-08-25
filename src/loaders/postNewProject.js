export default async function PostNewProject ({ user, projectName }) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_MAKE_NEW_PROJECT, {
        method : 'POST', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            projectName
        })
    })

    if (!request.ok){
        let error = await request.json()
        // console.log(error)
        throw new Error(error.errors)
    }

    return await request.json()
}