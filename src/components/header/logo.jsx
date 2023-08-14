import logo_svg from '../../assets/angle-bracket.svg'
import { LogoStyled, LogoImage, LogoText } from '../../styles/header/logo.styled'

function Logo () { 

    return (
        <LogoStyled to='home'>
            <LogoImage src={logo_svg} alt='osff-logo'/>
            <LogoText>OSFF</LogoText>
        </LogoStyled>
    )
}

export default Logo 