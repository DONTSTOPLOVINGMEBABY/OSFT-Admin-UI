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

function IndividualVariable ({
    name, 
    parentFeatureName, 
    productionEnabled, 
    developmentEnabled, 
    updatedAt
}) {

    const { user } = useAuth()
    const [production, setProduction] = useState(productionEnabled)
    const [development, setDevelopment] = useState(developmentEnabled)
    const [productionLoading, setProductionLoading] = useState(true)
    const [developmentLoading, setDevelopmentLoading] = useState(true)
    const queryClient = useQueryClient()


    return (
        <VariableEntryStyled>
            <LeftBox>
                <LeftBoxEntry text={name}/>
                <LeftBoxEntry text={parentFeatureName}/>
            </LeftBox>
            <RightBox>
                <RightBoxEntry text={updatedAt}/>
                <RightBoxEntry>
                     { 
                        productionLoading ? 
                        <AdjustableSpinner 
                        height='24' 
                        width='24' 
                        radius='5'/> 
                        : production ? 
                            <EnabledIcon src={variable_enabled}/> : 
                            <EnabledIcon src={variable_disabled}/> 
                    }   
                </RightBoxEntry>
                <RightBoxEntry text='Production Enabled'/>
            </RightBox>
        </VariableEntryStyled>
    )
}

export default IndividualVariable


/* 
developmentEnabled
: 
true
name
: 
"red-circle"
parentFeatureName
: 
"circles"
productionEnabled
: 
false
updatedAt
: 
"8/1/2023"
*/