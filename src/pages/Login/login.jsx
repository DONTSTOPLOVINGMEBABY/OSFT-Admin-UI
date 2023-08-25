import { useState, useRef } from "react"
import { useAuth } from "../../context/authContext"
import { 
    LoginPageStyled, 
    LoginForm, 
    LoginInput, 
    FormButton, 
    LoadingButton, 
    LoginTitle,
    WantTo, 
    CustomLink, 
} from "../../styles/pages/login.styled"
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner"
import ErrorMessage from "../../components/errorMessage"

function Login () {
    
    const usernameRef = useRef()
    const passwordRef = useRef()
    const { loginUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        let loginResponse = await loginUser(username, password)
        if (loginResponse.status){
            setShowErrors(true)
            if (!Array.isArray(loginResponse.data.errors)){
                setErrorMessages([loginResponse.data.errors])
            }
            else {
                setErrorMessages(loginResponse.data.errors)
            }
        }
        setLoading(false)
    }

    return ( 
        <LoginPageStyled>
            <LoginForm onSubmit={login}>
                <LoginTitle>Login</LoginTitle>
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
                <LoginInput
                type="text"
                placeholder="Username"
                ref={usernameRef}
                />
                <LoginInput
                type="password"
                placeholder="Password"
                ref={passwordRef}
                />
                { loading ? 
                    <LoadingButton>
                    Login
                    <AdjustableSpinner 
                    height='fit-content'
                    width='30'
                    radius='5'
                    />
                    </LoadingButton> : 
                    <FormButton>Login</FormButton>   
                }
            <WantTo>
                Want to make an account? <CustomLink to="/signup">Signup</CustomLink>
            </WantTo>
            <WantTo>
                Want to try a demo? <CustomLink to="/demo">Click here</CustomLink>
            </WantTo>
            </LoginForm> 
        </LoginPageStyled>
    )
}

export default Login