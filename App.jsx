import React from 'react';
import PetCard from './components/PetCard';
import './App.css';

function App() {
  const petData = {
    name: "Имя",
    type: "Тип",
    breed: "Порода",
    age: "3 года",
    photo: "Фото",
    traits: [
      "Особенности и черты"
    ],
    favoriteFood: "Любимая еда."
  };

  return (
    <div className="app-container">
      <h1 className="main-title">Приложение «Домашний любимец»</h1>
      <PetCard 
        name={petData.name}
        type={petData.type}
        breed={petData.breed}
        age={petData.age}
        photo={petData.photo}
        traits={petData.traits}
        favoriteFood={petData.favoriteFood}
      />
    </div>
  );
}

export default App;
