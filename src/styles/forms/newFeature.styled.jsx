import styled from "styled-components"
import { 
    FormModal, 
    ActualForm, 
    SubmitButton, 
    LoadingSubmit, 
    Title, 
    InputBox,  
} from "../global/forms.styled"

const NewFeatureStyled = styled(FormModal)`
    width: 500px;
    min-height: 500px;
`

const NewFeatureForm = styled(ActualForm)`
`

const FormTitle = styled(Title)`
`

const FeatureInputBox = styled(InputBox)`
`

const DescriptionBox = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    margin: 8px;
`

const FormButton = styled(SubmitButton)`
    margin: 0;
`

const LoadingButton = styled(LoadingSubmit)`
`


export {
    NewFeatureStyled, 
    NewFeatureForm, 
    FormTitle,
    FeatureInputBox,  
    DescriptionBox,  
    FormButton,
    LoadingButton,  
}
