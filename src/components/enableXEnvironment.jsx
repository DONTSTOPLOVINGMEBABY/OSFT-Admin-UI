import { useAuth } from "../context/authContext"
import { useMutation, useQueryClient } from "react-query"
import { 
    EnabledDisabledIcon, 
    EnableXEnvironmentsStyled 
} from "../styles/components/enableXEnvironment.styled"
import AdjustableSpinner from "./spinners/adjustableSizeSpinner"
import green_check_svg from '../assets/green-check.svg'
import red_x from '../assets/red-exit.svg'
import { useState } from "react"


function EnableXEnvironment ({
    status, 
    loader_function, 
    destructure_response, 
    invalid_queries, 
    request_body, 
}) {

    const { user } = useAuth()
    const [enabled, setEnabled] = useState(status)
    const [iconLoading, setIconLoading] = useState(false)
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn : (args) => {
            return loader_function(args)
        }, 
        onSuccess : (data) => {
            let newStatus = data[destructure_response]
            setEnabled(newStatus)
            setIconLoading(false)
            invalid_queries.forEach( (string) => {
                console.log(string)
                queryClient.refetchQueries(string)
            })
        }, 
        onError : (error) => {
            console.error(error)
        }
    })

    const callMutation = () => {
        setIconLoading(true)
        mutation.mutate({
            user, 
            ...request_body
        })
    }

    return (
       <EnableXEnvironmentsStyled>
        {
            iconLoading ? 
            <AdjustableSpinner 
            height='24' 
            width='24' 
            radius='5'/> 
            : enabled ? 
                <EnabledDisabledIcon onClick={callMutation} src={green_check_svg}/> : 
                <EnabledDisabledIcon onClick={callMutation} src={red_x}/> 
        }
       </EnableXEnvironmentsStyled> 
    )
}

export default EnableXEnvironment