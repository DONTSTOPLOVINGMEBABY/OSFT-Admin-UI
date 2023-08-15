import { useRef } from "react";
import { 
    SearchBarStyled,  
    SearchIcon, 
    ExitIcon,  
    SearchInput
} from "../styles/components/searchBar.styled";
import search_svg from "../assets/search-icon.svg"
import exit_svg from "../assets/exit.svg"


function SearchBar({ set_results }) {

    const searchInput = useRef()
    
    return (
        <SearchBarStyled tabIndex="0">
            <SearchIcon src={search_svg} alt="a-search-icon"/>
            <SearchInput type="text" ref={searchInput} onChange={
                (e) => set_results(e.target.value)} 
            /> 
            <ExitIcon src={exit_svg} alt="an-exit-symbol" onClick={set_results('')}/>
        </SearchBarStyled>
    )
}

export default SearchBar