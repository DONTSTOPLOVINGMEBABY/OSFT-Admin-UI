import { Link } from "react-router-dom"
import styled from "styled-components"

const AppNavigationStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const WrapLink = ({ className, to, children }) => (
    <Link className={className} to={to}>{children}</Link>
)

const NavLink = styled(WrapLink)`
    font-size: 16px ; 
    font-family : ${ props => props.theme.font.family } ;
    color : ${ props => props.theme.font.color } ;   
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    text-decoration : none ; 
`

export { NavLink, AppNavigationStyled }