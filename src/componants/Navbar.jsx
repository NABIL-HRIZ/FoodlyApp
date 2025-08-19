import React from 'react'
import logo_icon from '../assets/logo_icon.webp'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg custom-navbar">
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
            <Link className="nav-link cart-link" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
