import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"

const HomePageStyled = styled(assembleMainContent)` 
    color: ${ props => props.theme.font.color } ;
    background-color: ${ props => props.theme.background.main } ;
    align-items: flex-start;
    justify-content: center;
`

const ProjectName = styled.div`
    color: ${ props => props.theme.font.homepage_project_color };
    font-weight: 700;
    display: flex; 
    justify-content: center;
    align-items: center; 
    width: 33%;
`

const MainTitle = styled(ProjectName)`
    justify-content: left;
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

const InfoChunk = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-around;
    align-items: center;
`

const FeatureHeader = styled(InfoChunk)`
    border-bottom: 2px solid ${ props => props.theme.borders.main_separator }; 
    padding-bottom: 4px;
`

const IndividualVariableStyled = styled(InfoChunk)`
    margin: 12px 0px;
`

const EnabledDisabledSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
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

const AllFeatureVariables = styled.div`
    display: flex;
    width : 100% ; 
    height: fit-content;
    flex-direction: column;
`

const NoProjects = styled.div`
    font-size: 1.5rem;
`



export { 
    MainTitle, 
    HomePageStyled, 
    ProjectName, 
    WhiteSpan,
    IndividualFeatureStyled,
    InfoChunk,  
    EnabledDisableFeature, 
    EnabledDisableFeatureText, 
    EnabledDisabledSection, 
    AllFeatureVariables, 
    FeatureHeader, 
    IndividualVariableStyled, 
    NoProjects, 
}