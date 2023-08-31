import { 
    NewProjectStyled, 
    NewProjectForm, 
    Title, 
    FormInput, 
    SubmitButton, 
    LoadingSubmit, 
} from "../../styles/forms/newProject.styled"
import { forwardRef, useRef, useState } from "react";
import CloseForm from "../closeForm";
import AdjustableSpinner from '../../components/spinners/adjustableSizeSpinner'
import { useMutation, useQueryClient } from "react-query"; 
import { useAuth } from "../../context/authContext";
import loaders from "../../loaders";
import ErrorMessage from "../../components/errorMessage";

const NewProject = forwardRef(function NewProject(props, ref) {
    


    const { user } = useAuth()
    const projectNameInput = useRef()
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const queryClient = useQueryClient()

    const createProjectMutation = useMutation({
      mutationFn : (args) => {
        return loaders.projects.PostNewProject(args)
      }, 
      onSuccess : (data) => {
        setLoading(false)
        projectNameInput.current.value = ''
        ref.current.close()
        queryClient.refetchQueries('projects')
      }, 
      onError : (error) => {
        console.log(error.message)
        setErrorMessage(error.message)
        setShowError(true)
        setLoading(false)
      }, 
    })

    const createNewProject = async (e) => {
      e.preventDefault()
      if (loading) {return}
      setLoading(true)
      createProjectMutation.mutate({
        user, 
        projectName : projectNameInput.current.value, 
      })
    }

    return (
        <NewProjectStyled ref={ref}>
            <NewProjectForm onSubmit={createNewProject}>
                <CloseForm modal={ref}/>
                <Title>New Project</Title>
                { showError ?
                  <ErrorMessage
                  message={errorMessage}
                  height='40px'
                  font_size='1.5rem' 
                  /> : null 
                }
                <FormInput   
                ref={projectNameInput}
                placeholder="Project Name"
                onChange={ () => { 
                  setShowError(false) 
                  projectNameInput.current.value = projectNameInput.current.value.replace(/[^a-zA-Z0-9-]/g, '')
                }}
                />
                { loading ? 
                  <LoadingSubmit>
                  Create Project 
                  <AdjustableSpinner 
                  height='30'
                  width='30'
                  radius='5'
                  />
                  </LoadingSubmit> : 
                  <SubmitButton>
                    Create Project
                  </SubmitButton>  
                }
            </NewProjectForm>
        </NewProjectStyled>
    )
})

export default NewProject

