import styled from "styled-components"
import { assembleMainContent } from "../global/page.styled"
import FlagContentBodyStyled from "../components/flagContentBody.styled"

const FeaturePageStyled = styled(assembleMainContent)`
`

const FeatureInfoBody = styled(FlagContentBodyStyled)`
    flex-direction: column;
`

const FeatureDescriptionTitlesStyled = styled.div`
    width: 100%;
    padding : 16px ;
    background-color: ${props => props.theme.background.feature_info_header};
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
`

const AllFeatures = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


const Leftbox = styled.div`
    
    width: 33%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`


const Rightbox = styled.div`
    width: 45%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const SingleFeatureBoxStyled = styled.div`
    width: 100%;
    padding : 16px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`


const titleBoxOutline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ props => props.theme.font.color };
    font-weight: 500;
    text-align: center;
`

const First = styled(titleBoxOutline)`
    grid-column: 1/2;
`

const Second = styled(titleBoxOutline)`
    grid-column: 2/3;
`

const Third = styled(titleBoxOutline)`
    grid-column: 3/4;
    color: white;
`

const InfoBox = styled.div`
    width: 100%;
`

const EnabledIcon = styled.img`
    height: 24px;
    width: 24px;
    cursor: pointer;
`


export {
    FeaturePageStyled, 
    FeatureInfoBody, 
    FeatureDescriptionTitlesStyled, 
    InfoBox, 
    Leftbox, 
    Rightbox, 
    First, 
    Second, 
    Third, 
    AllFeatures, 
    SingleFeatureBoxStyled,
    EnabledIcon 
}
