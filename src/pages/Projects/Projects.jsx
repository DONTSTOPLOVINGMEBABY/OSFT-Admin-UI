import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { useQuery } from "react-query"
import compareStrings from "../../utils/compareStrings"
import { 
    ProjectPageStyled, 
    ProjectModalHeader, 
    DisplayProjects
} from "../../styles/pages/project/project.styled"
import loaders from "../../loaders"
import NumProjects from "./numberOfProjects"
import SearchBar from "../../components/searchBar"
import NewButton from "../../components/newButton"
import ProjectOverview from "./project-overview"
import Spinner from "../../components/spinner"
import { useAuth } from "../../context/authContext"

function ProjectPage () {

    const [displayProjects, setDisplayProjects] = useState([])
    const { user } = useAuth()

    const { isLoading, isError, data, error } = useQuery({
        queryKey : ['projects'], 
        queryFn: () => loaders.projects(user)
    })

    useEffect( () => {
        if (data){
            setDisplayProjects(data.names)
        }
    }, [data])

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <div>Le error</div>
    }

    const set_results = (string) => {
        string = string.trim()
        if (string === ''){
            return setDisplayProjects(data.names)
        }
        let new_results = data.names.filter( projectName => compareStrings(string, projectName))
        setDisplayProjects(new_results)
    }
    const newProject = () => {}


    return ( 
        <ProjectPageStyled>
            <ProjectModalHeader>
                <NumProjects numprojects={data.numProjects} />
                <SearchBar set_results={set_results} />
                <NewButton onClick={newProject}>New Project</NewButton>
            </ProjectModalHeader>
            <DisplayProjects>
                { displayProjects.map(projectName => {
                    return ( 
                        <ProjectOverview  
                        project_data={data[projectName]}
                        key={projectName}
                        />
                    ) 
                })}
            </DisplayProjects>
        </ProjectPageStyled> 
    ) 
}

export default ProjectPage