import styled from "styled-components"
import { FormModal, ActualForm, SubmitButton, LoadingSubmit } from "../global/forms.styled"

const NewFeatureStyled = styled(FormModal)`
    width: 500px;
    min-height: 500px;
`

const NewFeatureForm = styled(ActualForm)`
`

const FormTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
`

const FeatureInputBox = styled.input`
    width: 100%;
    height: 50px;
    outline: none;
    font-size: 1.25rem;
    margin: 8px;
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
