import styled from "styled-components";


const AccountOptionsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 60px;
    border-radius: 30%;
    cursor: pointer;
`

const LogoutButton = styled.button`
    font-size: 16px;
    color: white;
    background-color: inherit;
    border: none;
    height: fit-content;
    width: fit-content;
    text-decoration: underline;
    cursor: pointer;
`


export { 
    AccountOptionsStyled, 
    LogoutButton, 
}