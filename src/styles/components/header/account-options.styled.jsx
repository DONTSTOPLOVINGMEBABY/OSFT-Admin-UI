import styled from "styled-components";

const AccountOptionsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 60px;
    border-radius: 30%;
    cursor: pointer;

    &:hover {
        background-color: #3f3e3e;
    }
`

const DownArrow = styled.img`
    height: 20px;
    width: 20px;
    margin: 0;
`

const ProfilePhoto = styled.img`
    height: 30px ; 
    width: 30px ;
    margin : 0 ;
`

export { AccountOptionsStyled, ProfilePhoto, DownArrow }