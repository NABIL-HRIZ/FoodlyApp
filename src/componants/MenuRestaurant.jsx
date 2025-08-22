import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { removeFromCart } from '../redux/cartSlice';
import '../styles/MenuRestaurant.css'; 
import dinner from '../assets/service-2.jpg'
import entree from '../assets/food.jpg'
import dessert from '../assets/service-3.jpg'
import breakfast from '../assets/service-1.jpg'
import Snacks from '../assets/service-4.jpg'
import boisson from '../assets/service-3.jpg'
import promo_img from '../assets/promotion.jpg'
const MenuRestaurant = () => {
   const getCategoryImage=
    {
        'dinner':dinner,
        'Entrées':entree,
        'Desserts':dessert,
        'Breakfast':breakfast,
        'Snacks':Snacks,
        'Boissons':boisson
    }

 const { restaurantsId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector(state => state.restaurants.data.find(r => r.restaurantsId === restaurantsId));
  const [data, setData] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState('all');
  const cart = useSelector(state => state.cart.items);


  useEffect(() => {
    const fetchMenu = async () => {
  const menuData = await (await fetch(`${import.meta.env.BASE_URL}menu_data.json`)).json();
      setData(menuData.find(item => item.restaurant_id === restaurantsId));
    };
    fetchMenu();
  }, [restaurantsId]);

  if(!restaurant || !data) return <p>Loading...</p>;




const total = cart.reduce((init, added) => init + added.dish_price, 0).toFixed(2);

 
 

      const handleFilterChange = (e) => {
    setFilteredCategory(e.target.value);
  };

   const displayedCategories = data ? filteredCategory === "all"
      ? data.menu
      : data.menu.filter(cat => cat.category === filteredCategory)
    : [];

    

  return (
    <div className='menu-restaurant-container'>

      <div className='menu-filter'>
        <h2>Filtrer le Menu</h2>
        <label>Filter by Category</label>
        <select onChange={handleFilterChange} value={filteredCategory}>
          <option value="all">All</option>
          {data && data.menu.map((category, index) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
        <div className='menu-restaurant-promo-img'>
            <img src={promo_img} alt="" />
            <h4>Promo  </h4> 
            <span>-30%</span>

        </div>

      </div>

      <div className='menu-items'>
        {data ? (
          displayedCategories.map((category, index) => (
            <div key={index} className="menu-category">
                <div className='category-image'>
                    <img src={getCategoryImage[category.category]} alt="" srcset="" />
                  <h2>{category.category}</h2>

                </div>
              <ul>
                {category.items.map(dish => (
                  <li key={dish.id}  onClick={() =>dispatch(addToCart(dish))}>
                    <div className='dish-infos'>
                    <h3>{dish.dish_name}</h3> 
                   <p>{dish.dish_description.slice(1,150)}</p>
                    </div>
                  
                  <span>${dish.dish_price.toFixed(2)} </span> 
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
  {cart.length === 0 ? (
    <div className='cart-empty'>
      <i className="fa-regular fa-note-sticky"></i>
      <p>Votre panier est vide</p>
    </div>
  ) : (
    <div className='cart-total'>
            <p className='cart-title'>Votre commande va vous apporte</p>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.dish_name}</h3>
          <span>${item.dish_price.toFixed(2)}</span>
          <span 
            style={{color:'red', cursor:'pointer', marginLeft:'10px'}} 
            onClick={() =>dispatch(removeFromCart(item.id))}
          >
            X
          </span>
        </div>
         
      ))}
        <div className='total'>
         <p>Total</p>
         <span>${total}</span>
      </div>
      
         
         
    </div>
  )}
</div>

           
      </div>

  );
};

export default MenuRestaurant;
