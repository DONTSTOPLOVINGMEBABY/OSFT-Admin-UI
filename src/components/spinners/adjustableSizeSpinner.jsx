import { ColorRing } from "react-loader-spinner"

function AdjustableSpinner ({height, width, radius}) {
    return (
        <SpinnerStyled>
            <ColorRing 
                visible={true}
                height={height}
                width={width}
                radius={radius}
                ariaLabel="blocks-loading"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </SpinnerStyled>
    )
}

export default AdjustableSpinner