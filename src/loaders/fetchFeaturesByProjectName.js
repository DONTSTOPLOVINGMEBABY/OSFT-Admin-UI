export default async function FetchFeaturesByProjectName (user, project_name) {
    let { accessToken } = user
    let request = await fetch(import.meta.env.VITE_FETCH_FEATURES_BY_PROJECT_NAME + new URLSearchParams({ project_name }), {
        method : 'GET', 
        credentials: 'include', 
        headers: {
            'Authorization' : `Bearer ${accessToken}`
        }
    })
    return await request.json()
}