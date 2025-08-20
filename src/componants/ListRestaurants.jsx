import React, { useEffect, useState } from 'react';
import '../styles/ListRestaurants.css'; 
import { Link} from 'react-router-dom';
import img_restaurant1 from '../assets/rest-1.jpg'
import img_restaurant2 from '../assets/rest-2.jpg'
import img_restaurant3 from '../assets/rest-3.jpg'
import img_restaurant4 from '../assets/rest-4.jpg'
import img_restaurant5 from '../assets/rest-5.jpg'




const ListRestaurants = () => {


    const restaurantsImage=[img_restaurant1,img_restaurant2,img_restaurant3,img_restaurant4,img_restaurant5];

    const getRandomImage = () => {
       return restaurantsImage[Math.floor(Math.random() * restaurantsImage.length)];
    }

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const cached = localStorage.getItem('restaurants');
      if (cached) {
        setRestaurants(JSON.parse(cached).slice(0, 20));
        return;
      }

      const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '38176af0b8msh3c09d796c566276p1ddb18jsn4545ae4663b7',
          'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const restaurantsData = (result.data.data || []).slice(0,20);
        setRestaurants(restaurantsData);
        localStorage.setItem('restaurants', JSON.stringify(restaurantsData));
      } catch (error) {
        console.error(error);
      } 
    };

    fetchRestaurants();
  }, []);

 

  return (
    <div className="restaurant-list-container">
      <h1 className="page-title">Découvrir Les Restaurants</h1>
      
      <div className="restaurants-grid">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <div className="restaurant-image-container">
              <img 
                src={restaurant.heroImgUrl} 
                alt={restaurant.name}
                className="restaurant-image"
                onError={(e) => {
                     e.target.onerror = null;
                  e.target.src = getRandomImage()

                }}
              />
              <div className="restaurant-status">
                {restaurant.currentOpenStatusText}
              </div>
            </div>
            
            <div className="restaurant-content">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              
              <div className="restaurant-rating">
                <span className="rating-stars">
                  {'★'.repeat(Math.round(restaurant.averageRating))}
                  {'☆'.repeat(5 - Math.round(restaurant.averageRating))}
                </span>
                <span className="rating-value">{restaurant.averageRating}</span>
                <span className="review-count">({restaurant.userReviewCount} Avis)</span>
              </div>
              
              <div className="cuisine-tags">
                {restaurant.establishmentTypeAndCuisineTags?.map((tag, i) => (
                  <span key={i} className="cuisine-tag">{tag}</span>
                ))}
              </div>
              
              <div className="restaurant-actions">
                <Link
                  to={`/menu/${restaurant.restaurantsId}`} 
                  className="menu-button"
                >
                  Voir Le Menu
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRestaurants;