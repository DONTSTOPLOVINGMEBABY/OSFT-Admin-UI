import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"
import FlagContentBodyStyled from "../components/flagContentBody.styled"
import { FeatureDescriptionTitlesStyled } from "./features.styled"

const VariablePageStyled = styled(assembleMainContent)`
`

const VariableInfoBody = styled(FlagContentBodyStyled)`
    flex-direction: column;
`

const VariableTableStyled = styled(FeatureDescriptionTitlesStyled)`
    color: ${ props => props.theme.font.color } ;
`

const VariableEntryStyled = styled(VariableTableStyled)`
    background-color: ${ props => props.theme.background.content };
    position: relative ; 
`

const LeftBox = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`

const RightBox = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftBoxEntryStyled = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightBoxEntryStyled = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`



export {
    VariablePageStyled, 
    VariableInfoBody, 
    VariableTableStyled, 
    LeftBox, 
    RightBox, 
    LeftBoxEntryStyled, 
    RightBoxEntryStyled, 
    VariableEntryStyled
}