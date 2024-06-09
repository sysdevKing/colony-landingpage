import React from 'react';
import './GameCard.css';

const GameCard = ({ title, description, image }) => {
  return (
    <div className="game-card">
      <div className="game-card-content">
        <h2 className="game-card-title">{title}</h2>
        <p className="game-card-description">{description}</p>
      </div>
      <div className="game-card-image-container">
        <img src={image} alt={title} className="game-card-image" />
      </div>
    </div>
  );
};

export default GameCard;
