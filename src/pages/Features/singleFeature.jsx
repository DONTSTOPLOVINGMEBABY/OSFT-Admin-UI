import { 
    Leftbox, 
    Rightbox, 
    SingleFeatureBoxStyled, 
    First, 
    Second, 
    Third, 
    EnabledIcon 
} from "../../styles/pages/features.styled"
import green_check_svg from '../../assets/green-check.svg'
import red_exit_svg from '../../assets/red-exit.svg'
import { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { useAuth } from "../../context/authContext"
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner"
import loaders from "../../loaders"
import DeleteXItem from "../../components/deleteXItem"

function SingleFeature ({
    name, 
    variables, 
    parentProject, 
    created, 
    productionEnabled, 
    developmentEnabled
}) {

    const { user } = useAuth()
    const [production, setProduction] = useState(productionEnabled)
    const [development, setDevelopment] = useState(developmentEnabled)
    const [productionLoading, setProductionLoading] = useState(false)
    const [developmentLoading, setDevelopmentLoading] = useState(false)
    const queryClient = useQueryClient()

    const changeDevStatusMutation = useMutation({
        mutationFn : (args) => {
            return loaders.features.updateDevelopmentStatus(args)
        }, 
        onSuccess : (data) => {
            let { development_status } = data
            setDevelopment(development_status)
            setDevelopmentLoading(false)
            queryClient.refetchQueries('features')
            queryClient.refetchQueries('homepage')
        }
    })

    const changeProdStatusMutation = useMutation({
        mutationFn : (args) => {
            return loaders.features.updateProductionStatus(args)
        }, 
        onSuccess : (data) => {
            let { production_status } = data
            setProduction(production_status)
            setProductionLoading(false)
            queryClient.refetchQueries('features')
            queryClient.refetchQueries('homepage')
        }
    })

    const callProdMutation = () => {
        setProductionLoading(true)
        changeProdStatusMutation.mutate({
            user, 
            'featureName' : name, 
            'projectName' : parentProject, 
        })
    }
    const callDevMutation = () => {
        setDevelopmentLoading(true)
        changeDevStatusMutation.mutate({
            user, 
            'featureName' : name, 
            'projectName' : parentProject, 
        })
    }

    return (
        <SingleFeatureBoxStyled>
            <DeleteXItem
            loader_function={loaders.features.DeleteFeature}
            invalidate_queries={[
                "features", 
                "homepage",
                "variables", 
                "projects", 
            ]}
            request_body={{ 
                projectName : parentProject, 
                featureName : name, 
            }}
            top={'16px'}
            left={'40px'}
            />
            <Leftbox>
                <First>{name}</First>
                <Second>{variables}</Second>
                <Third>{parentProject}</Third>
            </Leftbox>
            <Rightbox>
                <First>{created}</First>
                <Second>
                    { 
                        productionLoading ? 
                        <AdjustableSpinner 
                        height='24' 
                        width='24' 
                        radius='5'/> 
                        : production ? 
                            <EnabledIcon onClick={callProdMutation} src={green_check_svg}/> : 
                            <EnabledIcon onClick={callProdMutation} src={red_exit_svg}/> 
                    }   
                </Second>
                <Third>
                    { 
                        developmentLoading ? 
                        <AdjustableSpinner 
                        height='24' 
                        width='24' 
                        radius='5'/> 
                        : development ? 
                            <EnabledIcon onClick={callDevMutation} src={green_check_svg}/> : 
                            <EnabledIcon onClick={callDevMutation} src={red_exit_svg}/> 
                    }   
                </Third>
            </Rightbox>
        </SingleFeatureBoxStyled>
    )
}

export default SingleFeature