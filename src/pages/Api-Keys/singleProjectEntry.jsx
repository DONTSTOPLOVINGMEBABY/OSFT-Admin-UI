import { 
    SingleProjectEntryStyled,  
    ProjectName, 
    Keys, 
    SingleKey, 
    KeyType, 
    ApiKey, 
} from "../../styles/pages/apiKeys.styled";
import CopyToClipboard from "../../components/copyToClipBoard";

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
                    <KeyType>Production</KeyType>
                    <ApiKey>{productionApiKey}</ApiKey>
                    <CopyToClipboard item_to_copy={productionApiKey}/>
                </SingleKey>
                <SingleKey>
                    <KeyType>Development</KeyType>
                    <ApiKey>{developmentApiKey}</ApiKey>
                    <CopyToClipboard item_to_copy={developmentApiKey}/>
                </SingleKey>
            </Keys>
        </SingleProjectEntryStyled>
    )
}

export default SingleProjectEntry