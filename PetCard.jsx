import React from 'react';
import './PetCard.css';

const PetCard = (props) => {
  const { name, type, breed, age, photo, traits, favoriteFood } = props;

  return (
    <div className="pet-card">
      <div className="pet-photo-container">
        <img src={photo} alt={name} className="pet-photo" />
      </div>
      <div className="pet-details">
        <h2 className="pet-name">{name}</h2>
        <div className="pet-meta">
          <p><strong>Вид животного:</strong> {type}</p>
          <p><strong>Порода:</strong> {breed}</p>
          <p><strong>Возраст:</strong> {age}</p>
          <p><strong>Любимое лакомство:</strong> {favoriteFood}</p>
        </div>
        <div className="pet-traits">
          <h3>Особенности характера и повадки:</h3>
          <ul>
            {traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PetCard;