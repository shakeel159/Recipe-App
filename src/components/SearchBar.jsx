import react from 'react';
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = ({ setSearchFor }) =>{
    const handleInputChange = (event) => {
        setSearchFor(event.target.value);
      };
    return(
        <div className="InputWrapper">
            <FaSearch id="searchIcon"/>
            <input placeholder="Look for Yummy Recipes" onChange={handleInputChange}/>
        </div>
    ) 
}