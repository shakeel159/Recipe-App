
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import SideBar from '../SideBar.jsx'

const About = ({ setSearchFor }) => {

    return( 
        <>
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
        <div className="App">
            <SideBar />
            <div className="MainContentWrapper">
                <Header setSearchFor={setSearchFor} />
                <hr />
                <Body searchFor={searchFor} listItems={searchFor ? searchResults : foodItems} />
                <hr />
                <Footer />
            </div>
        </div>
        </>
    );
}


export default About