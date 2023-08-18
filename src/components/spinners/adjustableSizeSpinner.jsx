import { ColorRing } from "react-loader-spinner"
import { AdjustSpinnerStyled } from "../../styles/components/spinner.styled"

function AdjustableSpinner ({height, width, radius}) {
    return (
        <AdjustSpinnerStyled>
            <ColorRing 
                visible={true}
                height={height}
                width={width}
                radius={radius}
                ariaLabel="blocks-loading"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </AdjustSpinnerStyled>
    )
}

export default AdjustableSpinner