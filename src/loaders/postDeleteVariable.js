export default async function DeleteVariable (
    {   user, 
        name, 
        parentFeature, 
        projectName,  
    }
) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_DELETE_VARIABLE, {
        method : 'DELETE', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            name, 
            parentFeature, 
            projectName, 
        })
    })

    if (!request.ok){
        let error = await request.json()
        throw new Error(error.errors)
    }

    return await request.json()
}