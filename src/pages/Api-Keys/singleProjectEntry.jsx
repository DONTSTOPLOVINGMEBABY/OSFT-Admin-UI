import { 
    SingleProjectEntryStyled,  
    ProjectName, 
    Keys, 
    SingleKey
} from "../../styles/pages/apiKeys.styled";

function SingleProjectEntry ({
    name, 
    developmentApiKey, 
    productionApiKey, 
}) {

    return (
        <SingleProjectEntryStyled>
            <ProjectName>
                { name }
            </ProjectName>
            <Keys>
                <SingleKey>
                    
                </SingleKey>
                <SingleKey>
                    
                </SingleKey>
            </Keys>
        </SingleProjectEntryStyled>
    )
}

export default SingleProjectEntry