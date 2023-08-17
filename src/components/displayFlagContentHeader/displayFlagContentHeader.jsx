import { DisplayFlagContentHeaderStyled } from "../../styles/components/displayFlagContentHeader.styled";
import NumContent from "./numContent";
import SearchBar from "../searchBar";
import NewButton from "../newButton";

function DisplayFlagContentHeader ({ num_items, item_name, set_results, buttonModal, buttonMessage }) {
    return (
        <DisplayFlagContentHeaderStyled>
            <NumContent item_name={item_name} num_items={num_items}/>
            <SearchBar set_results={set_results} />
            <NewButton onClick={buttonModal}> {buttonMessage} </NewButton>
        </DisplayFlagContentHeaderStyled>
    )
}

export default DisplayFlagContentHeader