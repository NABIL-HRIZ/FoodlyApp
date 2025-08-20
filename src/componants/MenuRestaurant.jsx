import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MenuRestaurant.css'; 

const MenuRestaurant = () => {
  const { restaurantsId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      const url = '/menu_data.json';
      const response = await fetch(url);
      const menuData = await response.json();
      const restaurantMenu = menuData.find(
        item => item.restaurant_id === restaurantsId
      );
      setData(restaurantMenu);
    };
    fetchMenuData();
  }, [restaurantsId]);

  return (
    <div className='menu-restaurant-container'>

      <div className='menu-filter'>
        <h2>Filtrer le Menu</h2>
        <label>Filter by Category</label>
        <select>
          <option value="all">All</option>
          {data && data.menu.map((category, index) => (
            <option key={index} value={category.category}>{category.category}</option>
          ))}
        </select>

        <label>Sort by Price</label>
        <select>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className='menu-items'>
        {data ? (
          data.menu.map((category, index) => (
            <div key={index} className="menu-category">
              <h2>{category.category}</h2>
              <ul>
                {category.items.map(dish => (
                  <li key={dish.id}>
                    {dish.dish_name} - ${dish.dish_price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading menu...</p>
        )}
      </div>

      <div className='menu-restaurant-cart'>
        <h2>Ma Commande</h2>
        <i className="fa-regular fa-note-sticky"></i>
        <p>Votre panier est vide</p>
      </div>

    </div>
  );
};

export default MenuRestaurant;
