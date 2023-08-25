import {   
    LogoutButton
} from '../../styles/components/header/logout.styled'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/authContext"
import loaders from "../../loaders"

function LogoutUser () {

    const navigate = useNavigate()
    const { setUser } = useAuth()

    const mutation = useMutation({
        mutationFn : () => {
            return loaders.auth.LogoutUser()
        }, 
        onSuccess : (data) => {
            setUser(null)
            navigate("/login")
        }, 
        onError : (error) => {
            alert("failed to logout user")
        }
    })

    const logout = () => {
        mutation.mutate()
    }

    return ( 
        <LogoutButton onClick={logout}>
            Logout
        </LogoutButton>
    ) 
}

export default LogoutUser