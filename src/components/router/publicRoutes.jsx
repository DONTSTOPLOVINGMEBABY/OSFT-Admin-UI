import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/authContext"

function PublicRoutes () {
    const { user } = useAuth()
    return user ? <Navigate to='home' replace/>: <Outlet />
}

export default PublicRoutes