import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"
import FlagContentBodyStyled from "../components/flagContentBody.styled"
import { NavLink } from "../components/header/app-navigation.styled"

const DocsPageStyled = styled(assembleMainContent)`
`

const DocsInfoBody = styled(FlagContentBodyStyled)`
    flex-direction: column;
`

const DocsHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    flex-direction: column;
`

const HeaderTitle = styled.h1`
    padding: 0;
    margin: 0;
    font-family: ${ props => props.theme.font.family };
    color: ${ props => props.theme.font.color };

` 

const Links = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
`


const HeaderLink = styled(NavLink)`
    text-decoration: underline;
`



export { 
    DocsPageStyled, 
    DocsInfoBody, 
    DocsHeader, 
    HeaderLink, 
    HeaderTitle, 
    Links, 
}