import React, { useEffect } from 'react'
import logo_icon from '../assets/logo_icon.webp'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Navbar = () => {

  const [cart,setCart]=useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    },[])
    useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

      const total = cart.reduce((sum, item) => sum + item.dish_price, 0).toFixed(2);

      const removeFromCart = (id) => {
     setCart(prevCart => prevCart.filter(item => item.id !== id));
       localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  return (

   <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo_icon} alt="logo" className="logo-img" />
        <span className="brand-text">Foodly_App</span>
      </Link>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto align-items-lg-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to={'/'}><i className="fa-solid fa-house"></i> Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to={'/restaurants'}><i className="fa-solid fa-clipboard-list"></i> Restaurants</Link>
          </li>
          

          
          <li className="nav-item ">
            <Link className="nav-link cart-link" to="/restaurants">
              <div className='cart-count'>
                {JSON.parse(localStorage.getItem('cart'))?.length || 0}
              </div>
              <i className="fa-solid fa-cart-shopping " onClick={handleShow}></i>
               <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'"Protest Riot", sans-serif'}}>Ma Commande</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                {cart.length === 0 ? (
                  <p style={{fontFamily:'"Protest Riot", sans-serif'}}>Votre panier est vide</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="cart-items">
                        <h5>{item.dish_name}</h5>
                        <span>${item.dish_price.toFixed(2)}  <span  style={{color:'red', cursor:'pointer', marginLeft:'10px'}} 
            onClick={() => removeFromCart(item.id)}>X</span></span>
                       
                      </div>
                    ))}
                    <h4  style={{fontFamily:'"Protest Riot", sans-serif'}}>Total: ${total}</h4>
                  </>
                )}
              </Modal.Body>

      </Modal>

              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
