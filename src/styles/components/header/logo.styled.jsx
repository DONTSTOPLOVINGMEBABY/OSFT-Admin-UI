import styled from "styled-components"
import { Link } from "react-router-dom"

const WrapLink = ({ className, to, children }) => (
    <Link className={className} to={to}>{children}</Link>
)

const LogoStyled = styled(WrapLink)`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
    text-decoration: none;
`

const LogoImage = styled.img`
    height: 100%;
    margin-right: 4px;
    padding: 0;
`

const LogoText = styled.span`
    font-family: ${ props => props.theme.font.family } ;
    color : ${ props => props.theme.font.color } ; 
    font-size : 30px ; 
    font-weight: 700;
    letter-spacing: 2px;
`

export { LogoStyled, LogoImage, LogoText }