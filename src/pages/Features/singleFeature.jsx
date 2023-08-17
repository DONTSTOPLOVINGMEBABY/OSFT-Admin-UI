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
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner"


function SingleFeature ({
    name, 
    variables, 
    parentProject, 
    created, 
    productionEnabled, 
    developmentEnabled
}) {

    const [production, setProduction] = useState(productionEnabled)
    const [development, setDevelopment] = useState(developmentEnabled)


    return (
        <SingleFeatureBoxStyled>
            <Leftbox>
                <First>{name}</First>
                <Second>{variables}</Second>
                <Third>{parentProject}</Third>
            </Leftbox>
            <Rightbox>
                <First>{created}</First>
                <Second>
                    { production ? 
                      <EnabledIcon src={green_check_svg}/> : 
                      <EnabledIcon src={red_exit_svg}/> } 
                </Second>
                <Third>
                    { development ? 
                      <EnabledIcon src={green_check_svg}/> : 
                      <EnabledIcon src={red_exit_svg}/> } 
                </Third>
            </Rightbox>
        </SingleFeatureBoxStyled>
    )
}

export default SingleFeature