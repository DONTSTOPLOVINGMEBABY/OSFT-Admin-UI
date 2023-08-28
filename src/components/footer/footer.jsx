import { 
    FooterStyled,  
    FooterMainContent, 
    FooterText
} from "../../styles/components/footer/footer.styled"
import { 
    ExternalLink,  
    FooterIcon
} from "../../styles/components/footer/footer.styled"
import gh_cat from "../../assets/gh-cat.svg"

function Footer () {
    return ( 
        <FooterStyled>
            <FooterMainContent>
                <ExternalLink target="_blank" href="https://github.com/DONTSTOPLOVINGMEBABY/Feature-Flagging-Server">
                    <FooterIcon src={gh_cat} alt="Github Icon"/>
                    <FooterText>Open Source Feature Toggles</FooterText>
                </ExternalLink>
            </FooterMainContent>
        </FooterStyled> 
    ) 
}

export default Footer