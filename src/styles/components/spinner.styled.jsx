import styled from "styled-components"

const SpinnerStyled = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center; 
    align-items: center;
    background-color: ${props => props.theme.background.content};
`

const AdjustSpinnerStyled = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

export { 
    SpinnerStyled, 
    AdjustSpinnerStyled, 
} 