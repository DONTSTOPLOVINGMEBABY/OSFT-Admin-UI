export default async function FeaturesLoader (user) {
    let {accessToken} = user
    let request = await fetch(import.meta.env.VITE_FETCH_FEATURES, {
        method: 'GET', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`
        }
    }) 
    return await request.json()
}


/* 

http://localhost:3000/app/features

https://feature-flagging-server-envproduction.up.railway.app/app/features
*/