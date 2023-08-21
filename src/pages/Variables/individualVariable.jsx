import { VariableEntryStyled } from "../../styles/pages/variables.styled"
import { LeftBox, RightBox } from "../../styles/pages/variables.styled"
import LeftBoxEntry from "./leftBoxEntry"
import RightBoxEntry from "./rightBoxEntry"
import RightIconBoxEntry from './rightBox2'
import variable_disabled from '../../assets/red-exit.svg'
import variable_enabled from '../../assets/green-check.svg'
import { EnabledIcon } from "../../styles/pages/features.styled"
import { useAuth } from "../../context/authContext"
import { useState } from "react"
import { useQueryClient, useMutation } from "react-query"
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner"
import loaders from "../../loaders"

function IndividualVariable ({
    name, 
    parentFeatureName, 
    parentProjectName, 
    productionEnabled, 
    developmentEnabled, 
    updatedAt
}) {

    const { user } = useAuth()
    const [production, setProduction] = useState(productionEnabled)
    const [development, setDevelopment] = useState(developmentEnabled)
    const [productionLoading, setProductionLoading] = useState(false)
    const [developmentLoading, setDevelopmentLoading] = useState(false)
    const queryClient = useQueryClient()


    const changeDevStatusMutation = useMutation({
        mutationFn: (args) => {
            return loaders.variables.updateVariableDevStatus(args)
        }, 
        onSuccess : (data) => {
            console.log(data)
            let { developmentEnabled } = data
            setDevelopment(developmentEnabled)
            setDevelopmentLoading(false)
            queryClient.invalidateQueries('variables')
        }, 
        onError : (error) => {
            console.log(error)
        }
    })

    const changeProdStatusMutation = useMutation({
        mutationFn : (args) => {
            return loaders.variables.updateVariableProdStatus(args)
        }, 
        onSuccess : (data) => {
            console.log(data)
            let { productionEnabled } = data
            setProduction(productionEnabled)
            setProductionLoading(false)
            queryClient.invalidateQueries('variables')
        }, 
        onError : (error) => {
            console.log(error)
        }
    })

    const callProdMutation = () => {
        setProductionLoading(true)
        changeProdStatusMutation.mutate({
            user, 
            variableName : name, 
            parentFeatureName, 
            parentProjectName, 
        })
    }
    const callDevMutation = () => {
        setDevelopmentLoading(true)
        changeDevStatusMutation.mutate({
            user, 
            variableName : name, 
            parentFeatureName, 
            parentProjectName, 
        })
    }

    return (
        <VariableEntryStyled>
            <LeftBox>
                <LeftBoxEntry text={name}/>
                <LeftBoxEntry text={parentFeatureName}/>
            </LeftBox>
            <RightBox>
                <RightBoxEntry text={updatedAt}/>
                <RightIconBoxEntry>
                    { 
                        productionLoading ? 
                        <AdjustableSpinner 
                        height='24' 
                        width='24' 
                        radius='5'/> 
                        : production ? 
                            <EnabledIcon onClick={callProdMutation} src={variable_enabled}/> : 
                            <EnabledIcon onClick={callProdMutation} src={variable_disabled}/> 
                    }   
                </RightIconBoxEntry>
                <RightIconBoxEntry>
                    { 
                        developmentLoading ? 
                        <AdjustableSpinner 
                        height='24' 
                        width='24' 
                        radius='5'/> 
                        : development ? 
                            <EnabledIcon onClick={callDevMutation} src={variable_enabled}/> : 
                            <EnabledIcon onClick={callDevMutation} src={variable_disabled}/> 
                    }  
                </RightIconBoxEntry>
            </RightBox>
        </VariableEntryStyled>
    )
}

export default IndividualVariable