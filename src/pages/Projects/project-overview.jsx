import { 
    ProjectOverviewStyled, 
    OverviewTitle, 
    ProjectDetails, 
    MetricBox, 
    ProjectMetric
} from "../../styles/pages/project.styled";
import { useNavigate } from "react-router-dom";


function ProjectOverview ({ project_data }) {

    const navigate = useNavigate()

    const loadProject = () => {
        let project_name = project_data.name
        navigate(`/home/${project_name}`)
    }

    return (
        <ProjectOverviewStyled onClick={loadProject}>
            <OverviewTitle>{project_data.name}</OverviewTitle>
            <ProjectDetails>                
                <MetricBox>
                    <ProjectMetric>
                        {project_data.variables === undefined ? 0 : project_data.variables }
                    </ProjectMetric> 
                    { project_data.variables === 1 ? 'variable' :'variables' } 
                </MetricBox>                
                <MetricBox>
                    <ProjectMetric>
                        {project_data.productionEnabled === undefined ? 0 : project_data.productionEnabled }
                    </ProjectMetric> 
                    <span>production</span> 
                    <span>enabled</span>
                </MetricBox>                
                <MetricBox>
                    <ProjectMetric>
                        {project_data.developmentEnabled === undefined ? 0 : project_data.developmentEnabled}
                    </ProjectMetric> 
                    <span>development</span> 
                    <span>enabled</span>
                </MetricBox>                
            </ProjectDetails>
        </ProjectOverviewStyled>
    )
}

export default ProjectOverview