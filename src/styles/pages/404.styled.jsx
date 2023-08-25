import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"

const NotFoundPageStyled = styled(assembleMainContent)`    
    background-color: inherit;
`

const NotFoundMessage = styled.h1`
    color: ${ props => props.theme.font.color } ;
`


export {
    NotFoundPageStyled, 
    NotFoundMessage, 
}