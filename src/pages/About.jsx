import React from 'react';
import Body from '../Body.jsx'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import SideBar from '../SideBar.jsx'

const About = ({ setSearchFor }) => {

    return( 
        <>
        <div className="App">
              <div className="MainContentWrapper">
                  <Header setSearchFor={setSearchFor} />
                  <hr />
                  <h2>About Page</h2>
                  <Footer />
              </div>
          </div>
        </>
    );
}


export default About