
export default async function FetchHomePage (user, project_name=null) {
    let { accessToken } = user
    let request
    if (!project_name){
        request = await fetch('http://localhost:3000/app/home', {
            method: 'GET', 
            credentials : 'include',
            headers: {
            'Authorization' : `BEARER ${accessToken}`
            }
        })
    }
    else {
        request = await fetch('http://localhost:3000/app/home?' + new URLSearchParams({ project_name }), {
            method: 'GET', 
            credentials : 'include',
            headers: {
            'Authorization' : `BEARER ${accessToken}`
            }
        })
    }
    return await request.json()
}