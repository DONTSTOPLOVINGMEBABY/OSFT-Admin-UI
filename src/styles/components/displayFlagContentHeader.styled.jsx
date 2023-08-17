import styled from 'styled-components'

const DisplayFlagContentHeaderStyled = styled.header`
    width: 100%;
    height: 75px;
    padding: 16px 32px;
    border-bottom: 1px solid #dababa;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NumContentStyled = styled.span`
    color: ${props => props.theme.font.color};
    font-size: 1.5rem;
    font-weight: 500;
`

export {
    DisplayFlagContentHeaderStyled, 
    NumContentStyled
}