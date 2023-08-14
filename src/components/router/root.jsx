import { Outlet } from "react-router"
import Redirect from "./redirect"

function Root () {
    return (
        <>
            <Redirect to='home'/>
            <Outlet /> 
        </>
    )
}

export default Root