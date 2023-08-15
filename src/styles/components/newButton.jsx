import styled from "styled-components"

const NewButtonStyled = styled.button`
    max-width: 200px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.buttons.background};
    color: ${props => props.theme.font.color};
    font-size: 1.25rem;
    font-weight: 700;
    &:active {
        transform: scale(.9);
    }

`

export { NewButtonStyled }