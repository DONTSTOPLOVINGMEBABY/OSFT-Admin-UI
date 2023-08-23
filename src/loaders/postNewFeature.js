export default async function PostNewFeature ({ 
    user, 
    featureName, 
    description, 
    initialVariableKey, 
    featureVariableName, 
    projectName 
}) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/features/make-new-feature', {
        method : 'POST', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            projectName, 
            featureName, 
            description, 
            initialVariableKey, 
            featureVariableName, 
        })
    })

    if (!request.ok){
        let error = await request.json()
        // console.log(error)
        throw new Error(error.errors)
    }

    return await request.json()
}