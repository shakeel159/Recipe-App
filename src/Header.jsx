import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

const Header = ({ setSearchFor }) => {

    return( // within parenthesis one can insert HTML
        <header>
            <h1 className="HeaderButtons">Recipe Search</h1>

            <div className="SearchHeader">
                <div className="SearchbarContainer">
                    <SearchBar setSearchFor={setSearchFor} />
                    <div>Searchresults</div>
                </div>
            </div>

            <nav>
                <ul>
                    <li><a href="#" className="nav-button">Home</a></li>
                    <li><a href="#" className="nav-button">About</a></li>
                    <li><a href="#" className="nav-button">Services</a></li>
                    <li><a href="#" className="nav-button">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header