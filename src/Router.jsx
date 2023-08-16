import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { Root } from "./components/router"
import loaders from "./loaders"
import Header from "./components/header/header"
import HomePage from "./pages/Home/home"
import ProjectPage from "./pages/Projects/Projects"
import Login from "./pages/Login/login"
import PrivateRoutes from "./context/privateRoute"


function Router ({children}) {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route element={<PrivateRoutes/>}>
                    <Route 
                        path="home" 
                        element={<HomePage />}
                    />
                    <Route 
                        path="projects" 
                        element={<ProjectPage />}
                        loader={loaders.projects}
                    />
                </Route>
                <Route path="login" element={<Login/>}/>
            </Route>
        )
    ) 

    return <RouterProvider router={router}>{children}</RouterProvider>

    


}

export default Router