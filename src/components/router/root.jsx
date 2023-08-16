import { Outlet } from "react-router"
import Redirect from "./redirect"
import Header from "../header/header"
import Footer from "../footer/footer"
import AuthProvider from "../../context/authContext"

function Root () {
    return (
        <>  
            <Header />
            <AuthProvider>
                <Outlet />
            </AuthProvider>
            <Footer /> 
        </>
    )
}

export default Root