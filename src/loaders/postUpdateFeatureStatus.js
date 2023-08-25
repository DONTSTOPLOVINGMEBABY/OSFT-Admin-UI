export async function updateDevelopmentStatus ({user, featureName, projectName}) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_CHANGE_FEATURE_DEV_STATUS, {
        method : 'POST', 
        credentials : 'include',
        headers : {
            'Content-Type' : 'application/json', 
            'Authorization' : `Bearer ${accessToken}` 
        }, 
        body : JSON.stringify({
            featureName, 
            projectName, 
        })         
    })
    return await request.json()
}

export async function updateProductionStatus ({user, featureName, projectName}) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_CHANGE_FEATURE_PROD_STATUS, {
        method : 'POST', 
        credentials : 'include',
        headers : {
            'Content-Type' : 'application/json', 
            'Authorization' : `Bearer ${accessToken}` 
        }, 
        body : JSON.stringify({
            featureName, 
            projectName, 
        })         
    })
    return await request.json()
}

/*
http://localhost:3000/features/change-development-status

http://localhost:3000/features/change-production-status

https://feature-flagging-server-envproduction.up.railway.app/app/features

*/


