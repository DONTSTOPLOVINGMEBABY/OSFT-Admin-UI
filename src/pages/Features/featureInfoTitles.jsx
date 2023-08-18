import { 
    FeatureDescriptionTitlesStyled, 
    Leftbox, 
    Rightbox, 
    First, 
    Second, 
    Third
} from "../../styles/pages/features.styled";

function FeatureInfoTitles () {
    return (
        <FeatureDescriptionTitlesStyled>
            <Leftbox>
                <First>Name</First>
                <Second>Variables</Second>
                <Third>Parent Project</Third>
            </Leftbox>
            <Rightbox>
                <First>Created</First>
                <Second>Production Enabled</Second>
                <Third>Development Enabled</Third>
            </Rightbox>
        </FeatureDescriptionTitlesStyled>
    )
}

export default FeatureInfoTitles