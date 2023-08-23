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

const CloseFormStyled = styled.img`
    height: 24px;
    width: 24px;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
`


export {
    FormModal, 
    CloseFormStyled
}