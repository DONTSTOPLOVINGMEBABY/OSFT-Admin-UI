import { ColorRing } from "react-loader-spinner"

function Spinner () {
    return (
        <ColorRing 
            visible={true}
            height="100"
            width="100"
            radius="10"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    )
}

export default Spinner