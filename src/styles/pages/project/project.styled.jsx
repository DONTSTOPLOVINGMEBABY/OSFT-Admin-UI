import styled from "styled-components"
import { assembleMainContent } from "../../global/page.styled"

const ProjectPageStyled = styled(assembleMainContent)`
`

const ProjectModalHeader = styled.div`
    width: 100%;
    height: 75px;
    padding: 16px 32px;
    border-bottom: 1px solid #dababa;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DisplayProjects = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const NumProjectsStyled = styled.span`
    color: ${props => props.theme.font.color};
    font-size: 1.5rem;
    font-weight: 500;
`

const ProjectOverviewStyled = styled.div`
    display: flex;
    flex-direction: column ; 
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
`

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${ props => props.theme.font.color };
`



export { 
    ProjectPageStyled, 
    ProjectModalHeader, 
    DisplayProjects,  
    NumProjectsStyled,
    ProjectOverviewStyled, 
    OverviewTitle, 
    ProjectDetails, 
} 