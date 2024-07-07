import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { useNavigate } from 'react-router-dom';

const Header = ({ setSearchFor }) => {
    const navigate = useNavigate();
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
                    <li><a onClick={() => navigate('/Home')} className="nav-button">Home</a></li>
                    <li><a onClick={() => navigate('/About')} className="nav-button">About</a></li>
                    <li><a onClick={() => navigate('/Sevices')} className="nav-button">Services</a></li>
                    <li><a onClick={() => navigate('/Contact')} className="nav-button">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header