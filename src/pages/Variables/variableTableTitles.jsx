import { VariableTableStyled } from "../../styles/pages/variables.styled"
import { LeftBox, RightBox } from "../../styles/pages/variables.styled"
import LeftBoxEntry from "./leftBoxEntry"
import RightBoxEntry from "./rightBoxEntry"

function VariableTableTitles () {

    return (
        <VariableTableStyled>
            <LeftBox>
                <LeftBoxEntry text='Name'/>
                <LeftBoxEntry text='Parent Feature'/>
            </LeftBox>
            <RightBox>
                <RightBoxEntry text='Created'/>
                <RightBoxEntry text='Development Enabled'/>
                <RightBoxEntry text='Production Enabled'/>
            </RightBox>
        </VariableTableStyled>
    )
}

export default VariableTableTitles

/* 
            name, 
            parentFeatureName, 
            developmentEnabled, 
            productionEnabled, 
            updatedAt 

*/