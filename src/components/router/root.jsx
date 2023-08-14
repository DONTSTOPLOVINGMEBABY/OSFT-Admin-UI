import { Outlet } from "react-router"
import Redirect from "./redirect"
import Header from "../header/header"
import Footer from "../footer/footer"

function Root () {
    return (
        <>  
            <Header />
            <Redirect to='home'/>
            <Outlet />
            <Footer /> 
        </>
    )
}

export default Root