import styled from "styled-components"

const HomePageStyled = styled.div`
    display: flex;
    width: 100%;
    height: 80vh ; 
    background-color: ${ props => props.theme.background.main }; 
`

export { HomePageStyled }