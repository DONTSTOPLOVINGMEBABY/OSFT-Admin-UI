import { Navigate } from "react-router"

function Redirect({ to }) {
    return <Navigate to={to}/>
}

export default Redirect