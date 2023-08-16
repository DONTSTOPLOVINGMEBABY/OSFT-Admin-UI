import { useRef } from "react"
import { useAuth } from "../../context/authContext"

function Login () {
    
    const usernameRef = useRef()
    const passwordRef = useRef()
    const { loginUser } = useAuth()
    

    const login = async (e) => {
        e.preventDefault()
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        console.log(username)
        console.log(password)
        loginUser(username, password)
    }

    return ( 
        <form onSubmit={login}>
            <div className="cell">
                <label htmlFor="username">Username</ label>
                <input ref={usernameRef} type="text" id="username"/>
            </div>
            <div className="cell">
                <label htmlFor="password">Password</ label>
                <input ref={passwordRef} type="text" id="password"/>
            </div>
            <button type="submit">Login</button>
        </form> 
    )
}

export default Login