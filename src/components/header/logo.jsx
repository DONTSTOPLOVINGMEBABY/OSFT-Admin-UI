import logo_svg from '../../assets/angle-bracket.svg'
import { LogoStyled, LogoImage, LogoText } from '../../styles/components/header/logo.styled'

function Logo () { 

    return (
        <LogoStyled to='home'>
            <LogoImage src={logo_svg} alt='osff-logo'/>
            <LogoText>OSFT</LogoText>
        </LogoStyled>
    )
}

export default Logo 