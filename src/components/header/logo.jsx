import logo_svg from '../../assets/angle-bracket.svg'
import { LogoStyled, LogoImage, LogoText } from '../../styles/components/header/logo.styled'
import getHomePageProject from '../../utils/getHomePageProject'
import { useNavigate } from 'react-router-dom'

function Logo () { 

    const navigate = useNavigate()

    const navigateToHome = () => {
        let homePageProject = getHomePageProject()
        navigate("/home", {
            state : homePageProject ? homePageProject : null 
        })
    }

    return (
        <LogoStyled onClick={navigateToHome}>
            <LogoImage src={logo_svg} alt='osff-logo'/>
            <LogoText>OSFT</LogoText>
        </LogoStyled>
    )
}

export default Logo 