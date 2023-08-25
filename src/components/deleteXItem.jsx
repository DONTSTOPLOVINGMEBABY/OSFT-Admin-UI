import { useAuth } from "../context/authContext"
import { useMutation, useQueryClient } from "react-query"
import { 
    DeleteXItemStyled, 
    TrashCan  
} from "../styles/components/deleteXItem.styled"
import trash_can_svg from '../assets/trash-can.svg'
import AreYouSure from "./areYouSure"
import { useEffect, useRef, useState } from "react"

function DeleteXItem ({
    height, 
    width,
    loader_function, 
    invalidate_queries, 
    request_body, 
    top, 
    left, 
    cleanUpFunction
}) {
    
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()
    const areYouSureRef = useRef()

    const mutation = useMutation({
        mutationFn : (args) => {
            return loader_function(args)
        }, 
        onSuccess : (data) => {
            invalidate_queries.forEach( (string) => {
                queryClient.refetchQueries(string)
            })
            console.log('sucess')
        }, 
        onError : (error) => {
            console.error(error)
            alert('Operation Failed')
        }
    })
    
    const showWarning = (e) => {
        e.stopPropagation()
        areYouSureRef.current.showModal()
    }

    const deleteX = (e) => {
        setLoading(true)
        mutation.mutate({
            user, 
            ...request_body, 
        })
        if (cleanUpFunction){ cleanUpFunction() }
    }

    return (
        <DeleteXItemStyled $top={top} $left={left} onClick={showWarning}>
            <TrashCan
            src={trash_can_svg}
            $height={height}
            $width={width}
            />
            <AreYouSure
            ref={areYouSureRef}
            loading={loading}
            execute={deleteX}
            />
        </DeleteXItemStyled>
    )
}

export default DeleteXItem