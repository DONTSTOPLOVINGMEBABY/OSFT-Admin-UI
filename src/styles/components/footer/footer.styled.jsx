import styled from "styled-components"

const FooterStyled = styled.footer`
    /* flex-grow: 1 ;  */
    background-color : ${ props => props.theme.background.content } ; 
    min-height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const FooterMainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1250px;
`

const ExternalLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px ; 
    font-family : ${ props => props.theme.font.family } ;
    color : ${ props => props.theme.font.color } ;   
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    text-decoration : none ; 
`

const FooterIcon = styled.img`
    height: 36px;
    width: 36px;
`

const FooterText = styled.span`
    font-size: 1.25rem;
    margin-left: 8px;
`


export { 
    FooterStyled, 
    FooterMainContent,
    ExternalLink,
    FooterIcon,   
    FooterText, 
}