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
    height: 100px;
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
`

const Keys = styled(Box)`
    flex-direction: column;
    width: 70%;
`

SingleKey = styled.div`
    display: flex;
`


export {
    ApiKeyPageStyled, 
    ApiKeyBody, 
    SingleProjectEntryStyled,
    ProjectName, 
    Keys, 
    SingleKey, 
}