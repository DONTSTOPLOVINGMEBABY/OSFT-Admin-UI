import { createBrowserRouter, createRoutesFromElements, BrowserRouter, Routes, RouterProvider, Route, Navigate } from "react-router-dom"
import { Root } from "./components/router"
import loaders from "./loaders"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import HomePage from "./pages/Home/home"
import ProjectPage from "./pages/Projects/Projects"
import Login from "./pages/Login/login"
import PrivateRoutes from "./context/privateRoute"
import PublicRoutes from "./components/router/publicRoutes"
import AuthProvider from "./context/authContext"
import Features from "./pages/Features/features"


function Router () {
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route index element={<Navigate to='home'/>} />
                    <Route element={<PublicRoutes/>}>
                        <Route path="login" element={<Login/>}/>
                        {/* <Route path="/signup" element={<Signup/>}/> */}
                    </Route>
                    <Route element={<PrivateRoutes/>}>
                        <Route path="home" element={<HomePage/>}/>
                        <Route path="projects" element={<ProjectPage/>}/>
                        <Route path="features" element={<Features/>}/>
                    </Route>
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router