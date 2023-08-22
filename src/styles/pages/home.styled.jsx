import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"

const HomePageStyled = styled(assembleMainContent)` 
    color: ${ props => props.theme.font.color } ;
    background-color: ${ props => props.theme.background.main } ;
    align-items: flex-start;
`

const ProjectName = styled.div`
    color: ${ props => props.theme.font.homepage_project_color };
    font-weight: 700;
    display: flex; 
`

const WhiteSpan = styled.div`
    color: ${ props => props.theme.font.color } ;
    font-weight: 500;
    margin-right: 4px;
`

const IndividualFeatureStyled = styled.div`
    background-color: ${ props => props.theme.background.content } ;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    padding: 20px;
    border-radius: 5px;
`

const FeatureHeaderInfo = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-around;
`

const EnabledDisableFeatureText = styled.span`
    margin-right: 8px;
`

const EnabledDisableFeature = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
`




export { 
    HomePageStyled, 
    ProjectName, 
    WhiteSpan,
    IndividualFeatureStyled,
    FeatureHeaderInfo,  
    EnabledDisableFeature, 
    EnabledDisableFeatureText
}