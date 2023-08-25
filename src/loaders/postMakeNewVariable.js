export default async function PostMakeNewVariable ({ 
    user, 
    name, 
    parentFeature, 
    projectName 
}) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_MAKE_NEW_VARIABLE, {
        method : 'POST', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            user, 
            name, 
            parentFeature, 
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