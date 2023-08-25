import { useEffect } from "react"
import { 
    NotFoundPageStyled, 
    NotFoundMessage 
} from "../../styles/pages/404.styled"
import { useNavigate } from "react-router-dom"
import getHomePageProject from "../../utils/getHomePageProject"

function NotFoundPage () {

    const navigate = useNavigate()

    useEffect(() => {
        let homepageProject = getHomePageProject()
        setTimeout(() => {
            navigate("/home", {
                state: homepageProject ? homepageProject : null 
            })
        }, 3000)    
    }, [])

    return ( 
        <NotFoundPageStyled>
            <NotFoundMessage>
                This page does not exist!
            </NotFoundMessage>            
        </NotFoundPageStyled>
    )
}

export default NotFoundPage