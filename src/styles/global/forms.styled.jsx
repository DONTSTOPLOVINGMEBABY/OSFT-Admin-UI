import styled from "styled-components"

const FormModal = styled.dialog`
    
    border: none;
    outline: none;
    border-radius: 5px;
    position: relative;

    &::backdrop {
        background-color: #212136 ; 
        opacity: .6 ;
    }
`

const ActualForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
`

const CloseFormStyled = styled.img`
    height: 24px;
    width: 24px;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
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
    color: white;
`

const LoadingSubmit = styled(SubmitButton)`
    background-color: #333070 ; 
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
`

const InputBox = styled.input`
    width: 100%;
    height: 50px;
    outline: none;
    font-size: 1.25rem;
    margin: 8px;
`



export {
    FormModal, 
    CloseFormStyled, 
    ActualForm,
    SubmitButton,
    LoadingSubmit,
    Title,   
    InputBox, 
}