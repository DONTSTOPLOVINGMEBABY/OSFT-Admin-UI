export default async function DeleteVariable (
    {   user, 
        name, 
        parentFeature, 
        parentProject,  
    }
) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/variables/delete-variable', {
        method : 'DELETE', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            name, 
            parentFeature, 
            parentProject, 
        })
    })

    if (!request.ok){
        let error = await request.json()
        throw new Error(error.errors)
    }

    return await request.json()
}