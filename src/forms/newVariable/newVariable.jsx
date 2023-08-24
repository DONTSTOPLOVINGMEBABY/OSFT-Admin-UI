import { forwardRef, useRef, useState } from "react"
import { 
    NewVariableStyled, 
    NewVariableForm, 
    FormTitle,  
    VariableInputBox, 
    FormButton, 
    LoadingButton, 
} from "../../styles/forms/newVariable.styled"
import ProjectDropDown from "../projectDropDown"
import FeatureDropDown from "../featureDropDown"
import ErrorMessage from "../../components/errorMessage"
import { useMutation, useQueryClient } from "react-query"
import loaders from "../../loaders"
import GetErrorMessagesFromString from "../../utils/getErrorMessages"
import { useAuth } from "../../context/authContext"

const NewVariable = forwardRef(function NewVariable(props, ref){
    
    const {user} = useAuth()
    const variableNameInputRef = useRef()
    const [showError, setShowError] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [selectedFeature, setSelectedFeature] = useState(null)
    const queryClient = useQueryClient()


    const createVariableMutation = useMutation({
        mutationFn : (args) => {
            return loaders.variables.PostMakeNewVariable(args)
        }, 
        onSuccess: (data) => {
            setLoading(false)
            variableNameInputRef.current.value = ''
            setSelectedFeature(null)
            setSelectedProject(null)
            ref.current.close()
            queryClient.refetchQueries('projects')
            queryClient.refetchQueries('features')
            queryClient.refetchQueries('variables')
            queryClient.refetchQueries('homepage')
        }, 
        onError : (error) => {
            setLoading(false)
            setShowError(true)
            setErrorMessages(GetErrorMessagesFromString(error.message))
        }
    })


    const createVariable = (e) => {
        e.preventDefault()
        if (loading) { return }
        createVariableMutation.mutate({
            user, 
            name: variableNameInputRef.current.value, 
            parentFeature : selectedFeature, 
            projectName : selectedProject, 
        })
    }

    return (
        <NewVariableStyled ref={ref}>
            <NewVariableForm onSubmit={createVariable}>
                <FormTitle>New Variable</FormTitle>
                {   showError ? 
                    errorMessages.map((message, index) => {
                        return (
                            <ErrorMessage
                            message={message}
                            height='40px'
                            font_size='1.5rem'
                            key={index}
                            />
                        )
                    }) 
                    : null  
                } 
                <ProjectDropDown 
                setProjectDropDownValue={setSelectedProject}
                />
                { !!selectedProject ?
                <FeatureDropDown
                projectSelected={selectedProject}
                setFeatureDropDownValue={setSelectedFeature}
                />
                : null}
                <VariableInputBox
                type="text"
                placeholder="Variable Name"
                ref={variableNameInputRef}
                onChange={() => setShowError(false)}          
                />
                { loading ? 
                    <LoadingButton onClick={createVariable}>
                        Create Feature
                        <AdjustableSpinner 
                        height='30'
                        width='30'
                        radius='5'
                        />
                    </LoadingButton> : 
                    <FormButton onClick={createVariable}>Create Feature</FormButton>   
                }
            </NewVariableForm>
        </NewVariableStyled>
    )

})

export default NewVariable


/* 
const MakeNewVariableValidator = [
    body("name")
        .trim()
        .notEmpty().withMessage("Missing Variable Name")
        .escape(),  
    body("parentFeature")
        .trim()
        .notEmpty().withMessage("Missing Parent Feature Name")
        .escape(), 
    body("projectName")
        .trim()
        .notEmpty().withMessage("Missing Parent Project Name")
        .escape(), 
]
*/ 