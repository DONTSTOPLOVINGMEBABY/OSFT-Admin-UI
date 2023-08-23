import styled from "styled-components"
import { FormModal } from "../global/forms.styled"

const AreYouSureStyled = styled(FormModal)`
    height: 175px;
    width: 300px;
`

const TitleMessage = styled.div`
    font-weight: 600;
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AreYouSureMainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
`

const Buttons = styled.button`
    width: 50%;
    height: 80px;
    border: none;
    border-radius: 5px;
    font-size: 1.75rem;
    font-weight: 600;
    margin: 12px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`

const YesButton = styled(Buttons)`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NoButton = styled(Buttons)`
    background-color: #00d600;
`

export {
    AreYouSureStyled, 
    AreYouSureMainContent,
    YesButton,
    NoButton,
    TitleMessage,  
}