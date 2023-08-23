import { useEffect } from "react";
import { ErrorMessageStyled } from "../styles/components/errorMessage.styled";

function ErrorMessage ({
    message, 
    height, 
    font_size,  
    set_function
}) {
    
    return (
        <ErrorMessageStyled
        $fontSize={font_size}
        $height={height}
        >
            { message }
        </ErrorMessageStyled>
    )
}

export default ErrorMessage
