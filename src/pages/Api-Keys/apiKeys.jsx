import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import { 
    ApiKeyPageStyled,  
    ApiKeyBody
} from "../../styles/pages/apiKeys.styled"
import DisplayFlagContentHeader from "../../components/displayFlagContentHeader/displayFlagContentHeader"
import Spinner from "../../components/spinners/spinner"
import SingleProjectEntry from "./singleProjectEntry"
import { useAuth } from "../../context/authContext"
import loaders from "../../loaders"


function ApiKeys () {

    const [displayProjects, setDisplayProjects] = useState([])
    const { user } = useAuth()

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['api-keys'], 
        queryFn: () => loaders["api-keys"].FetchApiKeys(user)
    })

    useEffect(() => {
        if (data) {
            setDisplayProjects(data.names)
        }
    }, [data])

    if (isLoading){
        return <Spinner/>
    }

    if (isError) {
        return <div>Le error</div>
    }

    console.log(data)

    return (
        <ApiKeyPageStyled>
            <DisplayFlagContentHeader
            item_name='Your API Keys'
            num_items={data.numProjects}
            set_function={setDisplayProjects}
            initialSearchSpace={data.names}
            buttonModal={false}
            />
            <ApiKeyBody>
                { displayProjects.map( (projectName, id) => {
                    let project = data[projectName]
                    return ( 
                    project ? <SingleProjectEntry
                        name={project.name}
                        developmentApiKey={project.developmentApiKey}
                        productionApiKey={project.productionApiKey}
                        key={id}
                    /> : null
                    )
                })}
            </ApiKeyBody>
        </ApiKeyPageStyled>
    )
}

export default ApiKeys