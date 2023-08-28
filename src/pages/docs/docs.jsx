import { Outlet } from "react-router-dom"
import { 
    DocsPageStyled,  
    DocsInfoBody, 
    DocsHeader, 
    Links, 
    HeaderTitle, 
} from "../../styles/pages/docs.styled"
import { HeaderLink } from "../../styles/pages/docs.styled"

function Docs () {
    return (
        <DocsPageStyled>
            <DocsInfoBody>
                <DocsHeader>
                    <HeaderTitle>Documentation</HeaderTitle>
                    <Links>
                        <HeaderLink to="js-client">Client-Side JS Client</HeaderLink>
                        <HeaderLink to="react-sdk">React SDK</HeaderLink>
                        <HeaderLink to="node-web-app">Node Web App</HeaderLink>
                        <HeaderLink to="admin-ui">Admin UI</HeaderLink>
                    </Links>
                </DocsHeader>
                <Outlet/>
            </DocsInfoBody>
        </DocsPageStyled>
    )
}

export default Docs