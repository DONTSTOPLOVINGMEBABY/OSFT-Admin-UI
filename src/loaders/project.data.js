
async function ProjectLoader (user) {
    let {accessToken} = user
    let request = await fetch('http://localhost:3000/app/projects', {
        method: 'GET', 
        headers: {
            'Authorization' : `BEARER ${accessToken}`
        }
    }) 
    return await request.json()
}

export default ProjectLoader