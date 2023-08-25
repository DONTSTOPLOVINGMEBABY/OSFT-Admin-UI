import { 
    createContext, 
    useContext, 
    useState, 
    useEffect, 
} from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/spinners/spinner"
import removeHomePageProject from "../utils/removeHomePageProject"

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
            let request = await fetch( import.meta.env.VITE_LOGIN , {
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
            removeHomePageProject()
            setUser(data)
            setLoading(false)
            navigate('/home')
        } catch (error) {   
            console.error(error)
        }
    }

    const attemptCookieLogin = async () => {
        try {
            let request = await fetch( import.meta.env.VITE_ATTEMPT_COOKIE_LOGIN , {
                method: 'POST', 
                credentials: 'include', 
            })
            let data = await request.json()
            if (!request.ok){ 
                if (window.location.pathname === '/signup'){
                    navigate('/signup')
                }
                else {
                    navigate('/login')
                }
                setLoading(false)
                return { data : data, status : request.status }
            }
            setUser(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const signUpUser = async (username, password, confirm_password) => {
        try {
            let request = await fetch( import.meta.env.VITE_SIGNUP , {
                method : 'POST', 
                credentials: 'include', 
                headers: {
                    'Content-Type' : 'application/json'
                }, 
                body: JSON.stringify({
                    username, 
                    password, 
                    confirm_password
                })
            })
            let data = await request.json()
            console.log(data)
            if (!request.ok){
                return { data : data, status: request.status }
            }
            removeHomePageProject()
            setUser(data)
            setLoading(false)
            navigate("/home")
        } catch (error) {

        }
    }

    useEffect( () => {
        attemptCookieLogin()
    }, [])

    const context = {
        user, 
        setUser, 
        loginUser, 
        signUpUser, 
    }

    return <AuthContext.Provider value={context}>
        { loading ? <Spinner/> : children }
    </AuthContext.Provider>
}

export const useAuth = () => { return useContext(AuthContext) }

 
export default AuthProvider

/* 
LOGIN
--------
http://localhost:3000/auth/login
https://feature-flagging-server-envproduction.up.railway.app/auth/login

LAUNCH-APP
----------
http://localhost:3000/auth/launch-app

https://feature-flagging-server-envproduction.up.railway.app/auth/launch-app

*/