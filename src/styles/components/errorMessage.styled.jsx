import styled from "styled-components"

const ErrorMessageStyled = styled.div`
    background-color: rgba(211, 0, 0, .2);
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: ${ props => props.$fontSize ? props.$fontSize : '1rem' };
    height: ${ props => props.$height ? props.$height : '40px' };
    width: 100%;
    color: black;
    font-weight: 600;
`

export { ErrorMessageStyled }