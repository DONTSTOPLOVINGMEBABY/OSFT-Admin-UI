import { NumContentStyled } from "../../styles/components/displayFlagContentHeader.styled"

function NumContent ({item_name, num_items}) {

    return (
        <NumContentStyled>
            {item_name} ({num_items})
        </NumContentStyled>
    )    
}

export default NumContent