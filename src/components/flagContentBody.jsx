import FlagContentBodyStyled from "../styles/components/flagContentBody.styled"


function DisplayFlagContentBody ({children}) {
    return (
        <FlagContentBodyStyled>
            {children}
        </FlagContentBodyStyled>
    )
}

export default DisplayFlagContentBody