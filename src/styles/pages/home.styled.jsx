import styled from "styled-components"

const HomePageStyled = styled.div`
    display: flex;
    width: 100%;
    min-height: 60% ;
    background-color: ${ props => props.theme.background.main }; 
`

export { HomePageStyled }