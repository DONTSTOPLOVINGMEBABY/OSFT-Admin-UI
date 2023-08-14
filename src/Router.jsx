import { createBrowserRouter, createRoutesFromElements, RouterProvider,  Route } from "react-router-dom"
import { Root } from "./components/router"
import HomePage from "./pages/Home/home"

function Router () {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route path="home" element={<HomePage />}/>
            </Route>
        )
    ) 

    return <RouterProvider router={router}/>
}

export default Router