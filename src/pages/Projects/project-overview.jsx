import { 
    ProjectOverviewStyled, 
    OverviewTitle, 
    ProjectDetails, 
    MetricBox, 
    ProjectMetric
} from "../../styles/pages/project.styled";
import { useNavigate } from "react-router-dom";
import DeleteXItem from "../../components/deleteXItem"
import loaders from '../../loaders'
import setHomePageProject from "../../utils/setHomePageProject";


function ProjectOverview ({ project_data }) {

    const navigate = useNavigate()

    const loadProject = () => {
        let project_name = project_data.name
        setHomePageProject(project_name)
        navigate(`/home`, {
            state: project_name
        })
    }

    return ( project_data ? 
        <ProjectOverviewStyled onClick={loadProject}>
            <DeleteXItem
            loader_function={loaders.projects.DeleteProject}
            invalidate_queries={[
                "features", 
                "homepage", 
                "variables", 
                "projects", 
                "api-keys", 
            ]}
            request_body={{
                projectName : project_data.name
            }}
            />
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
        </ProjectOverviewStyled> : null
    )
}

export default ProjectOverview