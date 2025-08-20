import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MenuHeroRestaurant.css'; 

import img_restaurant1 from '../assets/rest-1.jpg';
import img_restaurant2 from '../assets/rest-2.jpg';
import img_restaurant3 from '../assets/rest-3.jpg';
import img_restaurant4 from '../assets/rest-4.jpg';
import img_restaurant5 from '../assets/rest-5.jpg';

const MenuHeroRestaurant = () => {
    const { restaurantsId } = useParams();
    const restaurantsImage = [img_restaurant1, img_restaurant2, img_restaurant3, img_restaurant4, img_restaurant5];
    const [restaurant, setRestaurant] = useState(null);

    const getRandomImage = () => {
        return restaurantsImage[Math.floor(Math.random() * restaurantsImage.length)];
    }

useEffect(() => {
  const cached = localStorage.getItem("restaurants");
  if (cached) {
    const restaurantsData = JSON.parse(cached);
    const findRestaurant = restaurantsData.find(r => r.restaurantsId === restaurantsId);
    setRestaurant(findRestaurant);
  }
}, [restaurantsId]);


    return (
        <>
            {restaurant && (
                <div className="menu-hero-section" style={{ backgroundImage: `url(${getRandomImage()})` }}>
                    <div className="menu-hero-content">
                        <div className="menu-restaurant-image-container">
                            <img 
                                src={restaurant.heroImgUrl} 
                                alt={restaurant.name}
                                className="menu-restaurant-logo"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = getRandomImage();
                                }}
                            />
                        </div>
                        <h1 className="menu-restaurant-title">{restaurant.name}</h1>                        
                        <div className="menu-rating-container">
                            <span className="menu-rating-stars">
                                {'★'.repeat(Math.round(restaurant.averageRating))}
                                {'☆'.repeat(5 - Math.round(restaurant.averageRating))}
                            </span>
                            <span className="menu-rating-text">({restaurant.averageRating} Rating)</span>
                        </div>
                     
                        
                        <div className="menu-cuisine-tags">
                            {restaurant.establishmentTypeAndCuisineTags?.map((tag, i) => (
                                <span key={i} className="menu-cuisine-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MenuHeroRestaurant;