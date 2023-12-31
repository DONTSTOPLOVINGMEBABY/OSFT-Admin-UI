export async function updateVariableDevStatus ({user, variableName, parentFeatureName, parentProjectName}) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_CHANGE_VARIABLE_DEV_STATUS, {
        method : 'POST', 
        credentials : 'include',
        headers : {
            'Content-Type' : 'application/json', 
            'Authorization' : `Bearer ${accessToken}` 
        }, 
        body : JSON.stringify({
            name : variableName, 
            parentFeature: parentFeatureName, 
            projectName: parentProjectName, 
        })         
    })
    return await request.json()
}

export async function updateVariableProdStatus ({user, variableName, parentFeatureName, parentProjectName}) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_CHANGE_VARIABLE_PROD_STATUS, {
        method : 'POST', 
        credentials : 'include',
        headers : {
            'Content-Type' : 'application/json', 
            'Authorization' : `Bearer ${accessToken}` 
        }, 
        body : JSON.stringify({
            name : variableName, 
            parentFeature: parentFeatureName, 
            projectName: parentProjectName,
        })         
    })
    return await request.json()
}

/*
http://localhost:3000/features/change-development-status

http://localhost:3000/features/change-production-status 

https://feature-flagging-server-envproduction.up.railway.app/app/features

*/


