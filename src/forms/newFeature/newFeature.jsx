import { forwardRef, useEffect, useRef, useState } from "react";
import { 
    NewFeatureStyled, 
    NewFeatureForm,  
    FormTitle,
    FeatureInputBox,
    DescriptionBox, 
    FormButton, 
    LoadingButton, 
} from "../../styles/forms/newFeature.styled";
import AdjustableSpinner from "../../components/spinners/adjustableSizeSpinner";
import CloseForm from "../closeForm";
import { useAuth } from "../../context/authContext";
import { useQueryClient, useMutation, useQuery } from "react-query";
import loaders from "../../loaders";
import GetErrorMessagesFromString from "../../utils/getErrorMessages";
import ProjectDropDown from "../projectDropDown";
import ErrorMessage from "../../components/errorMessage";

const NewFeature = forwardRef(function NewFeature(props, ref){
    
    const { user } = useAuth()
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState([])
    const [selectedProject, setSelectedProject] = useState(null)
    const queryClient = useQueryClient()
    const featureNameRef = useRef()
    const initialVariableRef = useRef()
    const descriptionRef = useRef()
    const [loading, setLoading] = useState(false)


    const createFeatureMutation = useMutation({
        mutationFn : (args) => {
            return loaders.features.PostNewFeature(args)
        }, 
        onSuccess : (data) => {
            setLoading(false)
            featureNameRef.current.value = ''
            initialVariableRef.current.value = ''
            descriptionRef.current.value = ''
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
            setErrorMessage(GetErrorMessagesFromString(error.message))
        }
    })

    const createFeature = (e) => {
        e.preventDefault()
        setLoading(true)
        createFeatureMutation.mutate({
            user,
            featureName : featureNameRef.current.value, 
            description : descriptionRef.current.value, 
            initialVariableKey : initialVariableRef.current.value, 
            featureVariableName : initialVariableRef.current.value,
            projectName : selectedProject, 
        })
    }


    return (
        <NewFeatureStyled ref={ref}>
            <NewFeatureForm onSubmit={createFeature}>
                <CloseForm modal={ref}/>
                <FormTitle>New Feature</FormTitle>
                { showError ? 
                    errorMessage.map( (message, index) => {
                        return (  
                            <ErrorMessage
                            message={message}
                            height='40px'
                            font_size='1.5rem'
                            key={index}
                        />
                        )
                    }) : null
                }
                <ProjectDropDown
                projectSelected={selectedProject}
                setProjectDropDownValue={setSelectedProject}
                />
                <FeatureInputBox 
                type="text"
                placeholder="Feature Name"
                ref={featureNameRef}
                onChange={ () => { 
                    setShowError(false) 
                    featureNameRef.current.value = featureNameRef.current.value.replace(/[^a-zA-Z0-9-]/g, '')
                }}
                />
                <FeatureInputBox 
                type="text"
                placeholder="Initial Variable Name"
                ref={initialVariableRef}
                onChange={ () => { 
                    setShowError(false) 
                    initialVariableRef.current.value = initialVariableRef.current.value.replace(/[^a-zA-Z0-9-]/g, '')
                }}
                />
                <DescriptionBox
                defaultValue="A description of your feature"
                ref={descriptionRef}
                onChange={ () => setShowError(false) }
                />
                { loading ? 
                <LoadingButton>
                    Create Feature
                    <AdjustableSpinner 
                    height='30'
                    width='30'
                    radius='5'
                    />
                </LoadingButton> : 
                <FormButton>Create Feature</FormButton>   
                }
            </NewFeatureForm>
        </NewFeatureStyled>
    )
})

export default NewFeature

/* 
What's needed?

    body("featureName")
        .trim()
        .notEmpty().withMessage("Missing Feature Name")
        .escape(),
    body("description")
        .trim()
        .escape(), 
    body("initialVariableKey")
        .trim()
        .notEmpty().withMessage("Missing Variable Key")
        .escape(), 
    body("projectName")
        .trim()
        .notEmpty().withMessage("Missing Project Name")
        .escape(), 
    body("featureVariableName")
        .trim()
        .notEmpty().withMessage("Missing Feature Variable's Name")
        .escape(),
*/