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
import Select from "react-select"

const NewFeature = forwardRef(function NewFeature(props, ref){
    
    const { user } = useAuth()
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [allProjects, setAllProjects] = useState([])
    const queryClient = useQueryClient()
    const featureNameRef = useRef()
    const initialVariableRef = useRef()
    const descriptionRef = useRef()
    const [ projectDropDownValue, setProjectDropDownValue ] = useState(null)
    const [loading, setLoading] = useState(false)

    const { data, isLoading, error } = useQuery(['projects'], loaders.projects.ProjectLoader)

    useEffect(() => {
        if (data){
            let options = []
            data.names.forEach( name => {
                options.push({
                    value: name, 
                    label : name, 
                })
            })
            setAllProjects(options)
        }
    }, [data])

    const createFeatureMutation = useMutation({
        mutationFn : (args) => {
            return loaders.features.PostNewFeature(args)
        }, 
        onSuccess : (data) => {
            setLoading(false)
            featureNameRef.current.value = ''
            initialVariableRef.current.value = ''
            descriptionRef.current.value = ''
            ref.current.close()
            queryClient.refetchQueries('projects')
            queryClient.refetchQueries('features')
            queryClient.refetchQueries('variables')
            queryClient.refetchQueries('homepage')
        }, 
        onError : (error) => {
            console.log(error)
        }
    })

    if (isLoading) {
        return
    }

    const createFeature = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(featureNameRef.current.value, 
        initialVariableRef.current.value, 
        descriptionRef.current.value)
        console.log(projectDropDownValue)
    }


    return (
        <NewFeatureStyled ref={ref}>
            <NewFeatureForm onSubmit={createFeature}>
                <CloseForm modal={ref}/>
                <FormTitle>New Feature</FormTitle>
                <Select 
                options={allProjects}
                placeholder={"Pick a Project"}
                styles={{
                    container : (baseStyles, state) => ({
                        ...baseStyles, 
                        width : '100%'
                    })
                }}
                onChange={(selectedOption) => setProjectDropDownValue(selectedOption)}
                />
                <FeatureInputBox 
                type="text"
                placeholder="Feature Name"
                ref={featureNameRef}
                />
                <FeatureInputBox 
                type="text"
                placeholder="Initial Variable Name"
                ref={initialVariableRef}
                />
                <DescriptionBox
                defaultValue="Your Default Variable's name"
                ref={descriptionRef}
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