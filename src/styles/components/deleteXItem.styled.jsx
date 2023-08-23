import styled from 'styled-components'

const DeleteXItemStyled = styled.div`
    height: fit-content;  
    width: fit-content;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`

const TrashCan = styled.img`
    height: ${ props => props.$height ? props.$height : '20px' } ;  
    width: ${ props => props.$width ? props.$width : '20px' };
`

export { 
    DeleteXItemStyled, 
    TrashCan
}