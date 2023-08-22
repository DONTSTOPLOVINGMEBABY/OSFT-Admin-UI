import styled from "styled-components"
import FlagContentBodyStyled from "../components/flagContentBody.styled"
import { assembleMainContent } from "../global/page.styled"

const ApiKeyPageStyled = styled(assembleMainContent)`
`

const ApiKeyBody = styled(FlagContentBodyStyled)`
    flex-direction: column;
`

const SingleProjectEntryStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ props => props.theme.borders.main_separator };
    width: 100%;
    height: 200px;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`


const ProjectName = styled(Box)`
    color: ${ props => props.theme.font.color };
    font-weight: 600;
    font-size: 1.25rem;
    width: 30%;
    border-right: 1px solid ${ props => props.theme.borders.main_separator }; 
`

const Keys = styled(Box)`
    flex-direction: column;
    width: 70%;
`

const SingleKey = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ props => props.theme.font.color };
    margin: 8px ;
    width: 100%;
    
`

const KeyType = styled.div`
    display: flex;
    justify-content: center;
    font-size: larger;
    margin-right: 10px;
    width: 120px;
`

const ApiKey = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 40%;
    background-color: #575757;
    overflow: auto;
    padding: 4px;
    margin-right: 8px;
`


export {
    ApiKeyPageStyled, 
    ApiKeyBody, 
    SingleProjectEntryStyled,
    ProjectName, 
    Keys, 
    SingleKey, 
    KeyType,
    ApiKey, 
}