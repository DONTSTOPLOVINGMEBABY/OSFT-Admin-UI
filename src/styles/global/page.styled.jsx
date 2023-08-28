import styled from "styled-components"

const MainPageWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    flex: 1 ; 
    background-color: ${ props => props.theme.background.main } ;
    padding: 50px;
`

const MainContentSkeleton = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1250px;
    border-radius: 10px;
    background-color: ${props => props.theme.background.content};
` 

const assembleMainContent = ({ className, children}) => {
    return (
        <MainPageWrapperStyled>
            <MainContentSkeleton className={className}>
                {children}
            </MainContentSkeleton>
        </MainPageWrapperStyled>
    )
}
    
export { 
    MainPageWrapperStyled, 
    MainContentSkeleton, 
    assembleMainContent, 
}