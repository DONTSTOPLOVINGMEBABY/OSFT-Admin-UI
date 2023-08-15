import styled from "styled-components"

const FooterStyled = styled.footer`
    flex-grow: 1 ; 
    background-color : ${ props => props.theme.background.content } ; 
    min-height: 100px;
`

export { FooterStyled }