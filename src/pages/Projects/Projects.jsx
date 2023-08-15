import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import compareStrings from "../../utils/compareStrings"
import { 
    ProjectPageStyled, 
    ProjectModalHeader, 
    DisplayProjects
} from "../../styles/pages/project/project.styled"
import NumProjects from "./numberOfProjects"
import SearchBar from "../../components/searchBar"
import NewButton from "../../components/newButton"
import ProjectOverview from "./project-overview"


function ProjectPage () {
    const projectData = useLoaderData()
    const [displayProjects, setDisplayProjects] = useState(projectData.names)

    const set_results = (string) => {
        string = string.trim()
        if (string === ''){
            return setDisplayProjects(projectData.names)
        }
        let new_results = projectData.names.filter( projectName => compareStrings(string, projectName))
        setDisplayProjects(new_results)
    }

    const newProject = () => {}

    return ( 
        <ProjectPageStyled>
            <ProjectModalHeader>
                <NumProjects numprojects={projectData.numProjects} />
                <SearchBar set_results={set_results} />
                <NewButton onClick={newProject}>New Project</NewButton>
            </ProjectModalHeader>
            <DisplayProjects>
                { displayProjects.map(projectName => {
                    return ( 
                        <ProjectOverview  
                        project_data={projectData[projectName]}
                        key={projectName}
                        />
                    ) 
                })}
            </DisplayProjects>
        </ProjectPageStyled> 
    ) 
}

export default ProjectPage