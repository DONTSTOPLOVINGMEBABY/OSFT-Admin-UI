import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"
import { 
    InputBox, 
} from "../global/forms.styled"
import { 
    WantTo, 
    FormButton, 
    LoadingButton, 
    LoginTitle, 
    CustomLink
} from "./login.styled"

const SignUpPageStyled = styled(assembleMainContent)`
    height: fit-content;
    width: fit-content;
`

const SignUpForm = styled.form`
    padding: 20px;
    min-height: 400px;
    width: 350px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
`

const SignUpInput = styled(InputBox)`
    width: 95%;
`

const SignUpTitle = styled(LoginTitle)`
`


export {
    SignUpPageStyled, 
    SignUpForm,
    SignUpInput,  
    WantTo, 
    FormButton, 
    LoadingButton,
    SignUpTitle,
    CustomLink, 
}