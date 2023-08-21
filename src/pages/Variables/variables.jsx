import { 
    VariablePageStyled, 
    VariableInfoBody 
} from "../../styles/pages/variables.styled"
import DisplayFlagContentHeader from "../../components/displayFlagContentHeader/displayFlagContentHeader"
import VariableTableTitles from "./variableTableTitles"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useAuth } from "../../context/authContext"
import Spinner from "../../components/spinners/spinner"
import loaders from "../../loaders"

function Variables () {

    const [displayVariables, setDisplayVariables] = useState()
    const { user } = useAuth()
    
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['variables'], 
        queryFn: () => loaders.variables.VariablesLoader(user)
    })

    useEffect( () => {
        if (data) {
            setDisplayVariables(data.names)
        }
    }, [displayVariables])

    if (isLoading){
        return <Spinner/>
    }

    if (isError) {
        return <div>Le error</div>
    }

    const newVariable = () => {
        
    }
 
    return (
        <VariablePageStyled>
            <DisplayFlagContentHeader
            item_name='Variables'
            num_items={data.numVariables}
            set_function={setDisplayVariables}
            initialSearchSpace={data.names}
            buttonModal={newVariable}
            buttonMessage='New variable'
            />
            <VariableInfoBody>
                <VariableTableTitles/>
            </VariableInfoBody>
        </VariablePageStyled>
    )
}

export default Variables