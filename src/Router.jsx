import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Routes, RouterProvider, Route } from "react-router-dom"
import { Root } from "./components/router"
import loaders from "./loaders"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import HomePage from "./pages/Home/home"
import ProjectPage from "./pages/Projects/Projects"
import Login from "./pages/Login/login"
import PrivateRoutes from "./context/privateRoute"
import AuthProvider from "./context/authContext"


function Router () {
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    {/* <Route path="/signup" element={<Signup/>}/> */}
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/projects" element={<ProjectPage/>}/>
                    </Route>
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router