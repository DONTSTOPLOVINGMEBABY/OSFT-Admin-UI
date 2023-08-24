import styled from "styled-components"
import { 
    FormModal, 
    ActualForm, 
    Title, 
    InputBox, 
    SubmitButton, 
    LoadingSubmit 
} from "../global/forms.styled"

const NewVariableStyled = styled(FormModal)`
    width: 500px;
    min-height: 400px;
`

const NewVariableForm = styled(ActualForm)`
`

const FormTitle = styled(Title)`
`

const VariableInputBox = styled(InputBox)`
    
`

const FormButton = styled(SubmitButton)`
    margin: 0;
`

const LoadingButton = styled(LoadingSubmit)`
`




export {
    NewVariableStyled, 
    NewVariableForm,
    FormTitle,
    VariableInputBox,
    FormButton, 
    LoadingButton, 
}