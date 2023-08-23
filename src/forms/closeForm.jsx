import { forwardRef } from "react";
import { CloseFormStyled } from "../styles/global/forms.styled";
import exitSymbol from '../assets/exit.svg'

const CloseForm = forwardRef(function CloseForm({ modal }, ref){

    const closeForm = () => {
        modal.current.close()
    }

    return (
        <CloseFormStyled onClick={closeForm} src={exitSymbol} alt="An exit symbol"/>
    )
})

export default CloseForm