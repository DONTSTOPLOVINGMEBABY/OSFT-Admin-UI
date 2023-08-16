import { ColorRing } from "react-loader-spinner"
import SpinnerStyled from "../styles/components/spinner.styled"

function Spinner () {
    return (
        <SpinnerStyled>
            <ColorRing 
                visible={true}
                height="100"
                width="100"
                radius="10"
                ariaLabel="blocks-loading"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </SpinnerStyled>
    )
}

export default Spinner