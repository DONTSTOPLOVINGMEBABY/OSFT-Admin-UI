import { useRef, useEffect, useState } from "react";
import compareStrings from "../utils/compareStrings";
import { 
    SearchBarStyled,  
    SearchIcon, 
    ExitIcon,  
    SearchInput
} from "../styles/components/searchBar.styled";
import search_svg from "../assets/search-icon.svg"
import exit_svg from "../assets/exit.svg"


function SearchBar({ set_function, initialSearchSpace }) {

    const searchInput = useRef()

    const clearSearch = (e) => {
        set_function(initialSearchSpace)
        searchInput.current.value = ''
    }

    const set_results = (string) => {
        string = string.trim()
        if (string === ''){
            return set_function(initialSearchSpace)
        }
        let new_results = initialSearchSpace.filter( projectName => compareStrings(string, projectName))
        set_function(new_results)
    }
    
    return (
        <SearchBarStyled tabIndex="0">
            <SearchIcon src={search_svg} alt="a-search-icon"/>
            <SearchInput placeholder="Search" type="text" ref={searchInput} onChange={
                (e) => set_results(e.target.value)} 
            /> 
            <ExitIcon src={exit_svg} alt="an-exit-symbol" onClick={clearSearch}/>
        </SearchBarStyled>
    )
}

export default SearchBar