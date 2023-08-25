import { useRef, useState } from "react"
import { 
    SignUpPageStyled, 
    SignUpForm,  
    SignUpInput, 
    SignUpTitle, 
    FormButton, 
    LoadingButton, 
    WantTo, 
    CustomLink,
} from "../../styles/pages/signup.styled"
import ErrorMessage from "../../components/errorMessage"
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner"
import { useAuth } from "../../context/authContext"

function SignUp () {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [loading, setLoading] = useState(false)
    const { signUpUser } = useAuth()
    const [showErrors, setShowErrors] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (loading) { return }
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        let confirm_password = confirmPasswordRef.current.value
        let signUpResponse = await signUpUser(username, password, confirm_password)
        if (signUpResponse.status){
            setShowErrors(true)
            if (!Array.isArray(signUpResponse.data.errors)){
                setErrorMessages([signUpResponse.data.errors])
            }
            else {
                setErrorMessages(signUpResponse.data.errors)
            }
        }
        setLoading(false)
    }


    return (
        <SignUpPageStyled>
            <SignUpForm onSubmit={signup} autoComplete="off">
                <SignUpTitle>Sign Up</SignUpTitle>
                { showErrors ?
                    errorMessages && errorMessages.map( (message, index) => {
                        return (
                            <ErrorMessage
                            message={message}
                            height='80px'
                            font_size='1.5rem'
                            key={index}
                            />
                        )
                    }) : null 
                }
                <SignUpInput
                type="text"
                placeholder="Username"
                ref={usernameRef}
                />
                <SignUpInput
                type="password"
                placeholder="Password"
                ref={passwordRef}
                />
                <SignUpInput
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                />
                { loading ? 
                    <LoadingButton>
                        Sign Up
                    <AdjustableSpinner 
                    height='20'
                    width='30'
                    radius='5'
                    />
                    </LoadingButton> : 
                    <FormButton>Sign Up</FormButton>   
                }
                <WantTo>
                    Already have an account? <CustomLink to="/login">Login</CustomLink>
                </WantTo>
            </SignUpForm>
        </SignUpPageStyled>
    )
}

export default SignUp