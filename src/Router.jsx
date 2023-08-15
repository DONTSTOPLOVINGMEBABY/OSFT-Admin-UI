import { createBrowserRouter, createRoutesFromElements, RouterProvider,  Route } from "react-router-dom"
import { Root } from "./components/router"
import loaders from "./loaders"
import HomePage from "./pages/Home/home"
import ProjectPage from "./pages/Projects/Projects"

function Router ({children}) {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
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
        )
    ) 

    return <RouterProvider router={router}>{children}</RouterProvider>
}

export default Router