import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function RecipePage() {
    const { id } = useParams(); // Get the recipe ID from the URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetail = async () => {
          try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
              params: {
                apiKey: 'fff42f892c8341a78aa84b705805bf61',
              },
            });
            setRecipe(response.data);
          } catch (error) {
            console.error('Error fetching recipe detail:', error);
          }
        };
    
        fetchRecipeDetail();
      }, [id]);
    
      if (!recipe) {
        return <div>Loading...</div>;
      }

      
  // Format the summary using dangerouslySetInnerHTML to render the HTML tags
  const createMarkup = (html) => {
    return { __html: html };
  };

    return(
      <>
        <div className="recipe-detail">
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} />
        <p dangerouslySetInnerHTML={createMarkup(recipe.summary)} />
        <p><b>Price per serving:</b> ${recipe.pricePerServing}</p>
        {/* Display more recipe details as needed */}
        </div>
      </>
    );
    
  }
export default RecipePage