import styled from "styled-components"

const HeaderStyled = styled.header`
    height: 74px ; 
    width: 100%;
    padding: 8px;
    background-color: ${ props => props.theme.background.content } ; 
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavBar = styled.nav`
    width: 1250px ; 
    height: 100% ; 
    display: flex;
`

const MenuItems = styled.menu`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
`


export { HeaderStyled, NavBar, MenuItems } 