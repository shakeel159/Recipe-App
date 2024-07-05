import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Body from '../Body.jsx'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import SideBar from '../SideBar.jsx'

function Home() {
    const [searchFor, setSearchFor] = useState('');
    const [foodItems, setFoodItems] = useState([]);
  
    const [searchResults, setSearchResults] = useState([]);
  
    const fetchRandomRecipes = async () => { //if search empty
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            number: 15,  // Number of random recipes you want
            apiKey: 'fff42f892c8341a78aa84b705805bf61',
          },
        });
        console.log(response.data);
        setFoodItems(response.data.recipes);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    const fetchSearchResults = async (query) => { //if search has text
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
          params: {
            query,
            number: 50,
            apiKey: 'fff42f892c8341a78aa84b705805bf61',
          },
        });
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    useEffect(() => {
      fetchRandomRecipes();
    }, []);// Empty dependency array to fetch data once on component mount
  
    useEffect(() => {
      if (searchFor) {
        fetchSearchResults(searchFor);
      }
    }, [searchFor]); 
  
    return(
      <>
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

  
export default Home