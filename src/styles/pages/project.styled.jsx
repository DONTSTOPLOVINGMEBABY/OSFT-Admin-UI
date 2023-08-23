import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"

const ProjectPageStyled = styled(assembleMainContent)`
`

const DisplayProjects = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`


const ProjectOverviewStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column ;
    justify-content : space-between;
    background-color: inherit;
    width: 300px;
    height: 102px;
    border: 1px solid #dababa;
    padding: 8px 16px 16px;
    border-radius: 5px;
    margin: 12px;
    &:hover {
        background-color: #282738;
        cursor: pointer;
    }
`

const OverviewTitle = styled.span`
    font-size: 1.25rem;
    color: ${props => props.theme.font.color};
    font-weight: 700px;
    height: fit-content;
`

const ProjectDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const MetricBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${ props => props.theme.font.color };
    font-size: .9rem;
`

const ProjectMetric = styled.span`
    font-weight: 700;
    color: ${ props => props.theme.font.info_accented_color};
`



export { 
    ProjectPageStyled, 
    DisplayProjects,  
    ProjectOverviewStyled, 
    OverviewTitle, 
    ProjectDetails, 
    MetricBox, 
    ProjectMetric
} 