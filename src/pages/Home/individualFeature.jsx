import { useState } from "react"
import { 
    IndividualFeatureStyled, 
    ProjectName,
    FeatureHeaderInfo,
    EnabledDisableFeature,
    EnabledDisableFeatureText, 
} from "../../styles/pages/home.styled"
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner"
import { EnabledIcon } from '../../styles/pages/features.styled'
import green_check_svg from '../../assets/green-check.svg'
import red_exit_svg from '../../assets/red-exit.svg'
import { useAuth } from "../../context/authContext"
import { useQueryClient, useMutation } from "react-query"
import loaders from "../../loaders"

function IndividualFeature ({
    featureName, 
    feature
}) {
   
    const { user } = useAuth()
    const [production, setProduction] = useState(featureName.productionEnabled)
    const [development, setDevelopment] = useState(featureName.developmentEnabled)
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
            queryClient.invalidateQueries('features')
            queryClient.invalidateQueries('homepage')
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
            queryClient.invalidateQueries('features')
            queryClient.invalidateQueries('homepage')
        }
    })

    const callProdMutation = () => {
        setProductionLoading(true)
        changeProdStatusMutation.mutate({
            user, 
            'featureName' : featureName, 
            'projectName' : feature.parentProjectName, 
        })
    }
    const callDevMutation = () => {
        setDevelopmentLoading(true)
        changeDevStatusMutation.mutate({
            user, 
            'featureName' : featureName, 
            'projectName' : feature.parentProjectName, 
        })
    }

    console.log(featureName, feature)
    
    return (
        <IndividualFeatureStyled>
            <FeatureHeaderInfo>
                <ProjectName>{featureName}</ProjectName>
                <EnabledDisableFeature>
                    <EnabledDisableFeatureText> 
                        Production { production ? "Enabled" : "Disabled" }
                    </EnabledDisableFeatureText>
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
                </EnabledDisableFeature>
            </FeatureHeaderInfo>
            
        </IndividualFeatureStyled>
    )
}

export default IndividualFeature 
