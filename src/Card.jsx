import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, name, description, link }) {
  return (
    <a href={link} className="card-link">
      <div className="card">
        <img className="cardImage" src={image} alt={name} />
        <h2 className="cardTitle">{name}</h2>
        <p className="cardNameText">{description}</p>
      </div>
    </a>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;