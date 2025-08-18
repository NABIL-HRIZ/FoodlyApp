import React from 'react';
import '../styles/HeroSection.css';
import hero_img from '../assets/hero.png'
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="grid-parent">
        <div className="chef-card">
          <h3>Chef's Touch</h3>
          <p>Goûtez, savourez, partagez, profitez</p>
          <div className="image-container">
            <div className="cook-image"></div>
          </div>
        </div>
        
        <div className="yummy-card">
          <h3>Yummy Plate</h3>
          <p>Cuisine savoureuse, directement chez vous</p>
        </div>
        
       <div className="div3">
          <div className="hero-image-container">
            <img src={hero_img} alt="Hero" className="hero-image" />
            <h2 className="behind-image">Foodie App !</h2>
          </div>
          <div className="hero-content">
            <h5>Des plats faits avec amour</h5>
            <h4>24h/24</h4>
            <h5>Quotidien</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;