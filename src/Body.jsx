import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx';
import Food from './Food.jsx';

const Body = ({ searchFor, listItems }) => {
  if (!searchFor) {
    return (
      <>
        <Food FeaturedItem={"Featured Recipes:"} />
        {listItems.length > 0 ? (
          listItems.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              name={item.title}
              description={Array.isArray(item.dishTypes) ? item.dishTypes.join(', ') : item.dishTypes || 'No description available'}
              link={`/recipe/${item.id}`}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  } else {
    const filteredItems = listItems.filter(item =>
      item.title.toLowerCase().includes(searchFor.toLowerCase())
    );

    if (filteredItems.length === 0) {
      return <h2>No results found for "{searchFor}"</h2>;
    } else {
      return (
        <>
          <Food FeaturedItem={`Search For: ${searchFor}`} />
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              name={item.title}
              description={Array.isArray(item.dishTypes) ? item.dishTypes.join(', ') : item.dishTypes || 'No description available'}
              link={`/recipe/${item.id}`}
            />
          ))}
        </>
      );
    }
  }
};

Body.propTypes = {
  searchFor: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dishTypes: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
      ]),
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Body;