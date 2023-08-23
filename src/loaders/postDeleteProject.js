export default async function DeleteProject ({ user, projectName }) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/projects/delete-project', {
        method : 'DELETE', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            projectName
        })
    })

    if (!request.ok){
        let error = await request.json()
        // console.log(error)
        throw new Error(error.errors)
    }

    return await request.json()
}