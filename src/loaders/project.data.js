
export default async function ProjectLoader (user) {
    let {accessToken} = user
    let request = await fetch(import.meta.env.VITE_PROJECT_LOADER, {
        method: 'GET', 
        credentials : 'include',
        headers: {
            'Authorization' : `BEARER ${accessToken}`
        }
    }) 
    return await request.json()
}

/* 

http://localhost:3000/app/projects

https://feature-flagging-server-envproduction.up.railway.app/app/projects
*/