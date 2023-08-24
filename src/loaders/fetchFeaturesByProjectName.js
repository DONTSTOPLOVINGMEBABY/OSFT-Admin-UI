export default async function FetchFeaturesByProjectName (user, project_name) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/app/features-dropdown?' + new URLSearchParams({ project_name }), {
        method : 'GET', 
        credentials: 'include', 
        headers: {
            'Authorization' : `Bearer ${accessToken}`
        }
    })
    return await request.json()
}