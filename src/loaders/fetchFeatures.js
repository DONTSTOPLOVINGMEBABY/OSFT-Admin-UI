export default async function FeaturesLoader (user) {
    let {accessToken} = user
    let request = await fetch('http://localhost:3000/app/features', {
        method: 'GET', 
        credentials : 'include',
        headers: {
            'Authorization' : `BEARER ${accessToken}`
        }
    }) 
    return await request.json()
}


/* 

http://localhost:3000/app/features

https://feature-flagging-server-envproduction.up.railway.app/app/features
*/