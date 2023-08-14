import { Outlet } from "react-router"
import Redirect from "./redirect"
import Header from "../header/header"

function Root () {
    return (
        <>  
            <Header />
            <Redirect to='home'/>
            <Outlet /> 
        </>
    )
}

export default Root