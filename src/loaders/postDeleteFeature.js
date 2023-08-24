export default async function DeleteFeature ({ user, featureName, projectName }) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/features/delete-feature', {
        method : 'DELETE', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            featureName, 
            projectName
        })
    })

    if (!request.ok){
        let error = await request.json()
        throw new Error(error.errors)
    }

    return await request.json()
}