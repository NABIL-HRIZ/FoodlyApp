import React from 'react';
import '../styles/Gallery.css';
import burgerImg from '../assets/burger.jpg';
import pizzaImg from '../assets/pizza.jpg';
import fishImg from '../assets/fish.jpg';
import traditionalImg from '../assets/traditionel.jpg';

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-row">
        <div className="gallery-item">
          <img src={burgerImg} alt="Burger" />
          <h3 className="title-center">Burger</h3>
        </div>
        <div className="gallery-item">
          <img src={pizzaImg} alt="Pizza" />
          <h3 className="title-center">Pizza</h3>
        </div>
      </div>
      
      <div className="gallery-row">
        <div className="gallery-item">
          <img src={fishImg} alt="Poisson" />
          <h3 className="title-center">Poisson</h3>
        </div>
        <div className="gallery-item">
          <img src={traditionalImg} alt="Traditionnel" />
          <h3 className="title-center">Traditionnel</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;