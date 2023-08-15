import { NewButtonStyled } from "../styles/components/newButton"

function NewButton ({ children, onClick }) {
    return (
        <NewButtonStyled onClick={onClick}>
            {children}
        </NewButtonStyled>
    )
}

export default NewButton