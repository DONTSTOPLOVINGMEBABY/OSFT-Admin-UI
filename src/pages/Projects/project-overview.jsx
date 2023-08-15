import { 
    ProjectOverviewStyled, 
    OverviewTitle, 
    ProjectDetails, 
} from "../../styles/pages/project/project.styled";

function ProjectOverview ({ project_data }) {
    return (
        <ProjectOverviewStyled>
            <OverviewTitle>{project_data.name}</OverviewTitle>
            <ProjectDetails>
                
            </ProjectDetails>
        </ProjectOverviewStyled>
    )
}

export default ProjectOverview