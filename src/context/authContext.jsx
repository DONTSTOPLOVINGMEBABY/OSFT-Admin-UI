import { 
    createContext, 
    useContext, 
    useState, 
    useEffect, 
    useMemo, 
} from "react"

import { useNavigate } from "react-router-dom"
import Spinner from "../components/spinner"
import { Outlet } from "react-router-dom"

const AuthContext = createContext()

function AuthProvider ({ children }) {
    const [ loading, setLoading ] = useState(true)
    const [ user, setUser ] = useState(null)
    const navigate = useNavigate()

    const loginUser = async (username, password) => {
        if (!username || !password){
            throw new Error('FAILED TO LOGIN: User credentials not provided')
        }
        try {
            let request = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                credentials : 'include', 
                headers : { 
                    'Content-Type' : 'application/json'
                },   
                body : JSON.stringify({
                    username : username, 
                    password: password, 
                })
            })
            let data = await request.json()
            if (!request.ok){ return { data : data, status : request.status } }
            setUser(data)
            setLoading(false)
            navigate('/home')
        } catch (error) {   
            console.error(error)
        }
    }

    const attemptCookieLogin = async () => {
        try {
            let request = await fetch('http://localhost:3000/auth/launch-app', {
                method: 'POST', 
                credentials: 'include', 
            })
            let data = await request.json()
            if (!request.ok){ 
                navigate('/login')
                setLoading(false)
                return { data : data, status : request.status }
            }
            setUser(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect( () => {
        attemptCookieLogin()
    }, [])

    const context = {
        user, 
        loginUser, 
    }

    return <AuthContext.Provider value={context}>
        { loading ? <Spinner/> : <Outlet/> }
    </AuthContext.Provider>
}

export const useAuth = () => { return useContext(AuthContext) }

 
export default AuthProvider