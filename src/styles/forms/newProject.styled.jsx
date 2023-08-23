import styled from "styled-components"
import { FormModal } from "../global/forms.styled"

const NewProjectStyled = styled(FormModal)`
    height: 300px;
    width: 500px;
`

const NewProjectForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
`

const Title = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
`

const FormInput = styled.input`
    width: 100%;
    height: 80px;
    font-size: 1.5rem;
`

const SubmitButton = styled.button`
    height: 80px;
    width: 400px;
    font-size : 1.75rem ;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: ${ props => props.theme.buttons.background } ;   
    display: flex;
    align-items : center ;
    justify-content: center;
`

const LoadingSubmit = styled(SubmitButton)`
    background-color: #333070 ; 
`


export {
    NewProjectStyled, 
    NewProjectForm, 
    Title, 
    FormInput, 
    SubmitButton, 
    LoadingSubmit, 
}