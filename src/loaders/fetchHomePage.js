
export default async function FetchHomePage (user, project_name=null) {
    let { accessToken } = user
    let request
    if (!project_name){
        request = await fetch(import.meta.env.VITE_FETCH_HOMEPAGE_NO_PROJECT_NAME, {
            method: 'GET', 
            credentials : 'include',
            headers: {
            'Authorization' : `Bearer ${accessToken}`
            }
        })
    }
    else {
        request = await fetch(import.meta.env.VITE_FETCH_HOMEPAGE_PROJECT_NAME + new URLSearchParams({ project_name }), {
            method: 'GET', 
            credentials : 'include',
            headers: {
            'Authorization' : `Bearer ${accessToken}`
            }
        })
    }
    return await request.json()
}