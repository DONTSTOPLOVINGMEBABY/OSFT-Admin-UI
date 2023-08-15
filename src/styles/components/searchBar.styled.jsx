import styled from "styled-components"

const SearchBarStyled = styled.div`
    height : 100% ;
    max-width: 400px;
    flex-grow : 1 ;
    display: flex;
    border: ${ props => props.theme.font.color } solid 1px ; 
    border-radius: 25px;
    background-color: #2B2A3C;
    align-items: center;
    &:focus-within {
        border-color : #9792ED ;
        outline : none ;
    }
`

const SearchBarIcon = styled.img`
    height: 24px ; 
    width: 24px;
    margin: 0 12px ; 
`

const SearchIcon = styled(SearchBarIcon)`
    
`

const ExitIcon = styled(SearchBarIcon)`
    cursor: pointer;
`

const SearchInput = styled.input`
    height: 100%;
    padding: 2px 0 4px 0px ;
    background-color: inherit;
    border: none;
    flex-grow: 1;
    font-size: larger;
    color: ${ props => props.theme.font.color };
    &:focus {
        outline: none;
        border: none;
    }
`



export {
    SearchBarStyled, 
    SearchBarIcon, 
    SearchInput, 
    SearchIcon, 
    ExitIcon, 
}