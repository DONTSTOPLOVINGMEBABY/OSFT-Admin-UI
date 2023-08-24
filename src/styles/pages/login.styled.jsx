import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"
import FlagContentBodyStyled from "../components/flagContentBody.styled"
import { 
    InputBox, 
    SubmitButton, 
    LoadingSubmit, 
    Title
} from "../global/forms.styled"
import { Link } from "react-router-dom"

const LoginPageStyled = styled(assembleMainContent)`
    height: fit-content;
    width: fit-content;
`

const LoginForm = styled.form`
    padding: 20px;

    min-height: 385px;
    width: 350px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
`

const LoginTitle = styled(Title)`
    font-size: 1.25rem;
    height: fit-content;
`

const LoginInput = styled(InputBox)`
    width: 95%;
`

const FormButton = styled(SubmitButton)`
    margin: 0;
    width: 95%;
    height: 70px;
`

const LoadingButton = styled(LoadingSubmit)`
    width: 95%;
    height: 70px;
`

const WantTo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
`

const WrapLink = ({ className, to, children }) => (
    <Link className={className} to={to}>{children}</Link>
)

const CustomLink = styled(WrapLink)`
    margin-left: 8px;
`


export {
    LoginPageStyled, 
    LoginForm, 
    LoginInput,
    FormButton, 
    LoadingButton,  
    LoginTitle, 
    WantTo, 
    CustomLink
}