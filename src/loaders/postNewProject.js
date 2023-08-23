export default async function PostNewProject ({ user, projectName }) {
    let { accessToken } = user
    let request = await fetch('http://localhost:3000/projects/make-new-project', {
        method : 'POST', 
        credentials : 'include',
        headers: {
            'Authorization' : `Bearer ${accessToken}`, 
            'Content-Type' : 'application/json', 
        }, 
        body : JSON.stringify({
            projectName
        })
    })

    if (request.status !== 200 || request.status !== 304){
        let error = await request.json()
        // console.log(error)
        throw new Error(error.errors)
    }

    return await request.json()
}