import { useEffect, useState } from "react"
import { useAuth } from "../../context/authContext"
import DisplayFlagContentBody from "../../components/flagContentBody"
import { useQuery } from "react-query"
import { 
    ProjectPageStyled, 
} from "../../styles/pages/project.styled"
import loaders from "../../loaders"
import ProjectOverview from "./project-overview"
import Spinner from "../../components/spinner"
import DisplayFlagContentHeader from "../../components/displayFlagContentHeader/displayFlagContentHeader"


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

    const newProject = () => {}


    return ( 
        <ProjectPageStyled>
            <DisplayFlagContentHeader 
            item_name='Projects'
            num_items={data.numProjects}
            set_function={setDisplayProjects}
            initialSearchSpace={data.names}
            buttonModal={newProject}
            buttonMessage='New Project'
            />
            <DisplayFlagContentBody>
                { displayProjects.map(projectName => {
                    return ( 
                        <ProjectOverview  
                        project_data={data[projectName]}
                        key={projectName}
                        />
                    ) 
                })}
            </DisplayFlagContentBody>
        </ProjectPageStyled> 
    ) 
}

export default ProjectPage