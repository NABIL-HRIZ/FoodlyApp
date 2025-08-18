import React from 'react'
import logo_icon from '../assets/logo_icon.webp'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={logo_icon} alt="logo" className="logo-img" />
        <span className="brand-text">Foodly_App</span>
      </a>

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
            <a className="nav-link" href="#"><i className="fa-solid fa-house"></i> Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa-solid fa-clipboard-list"></i> Restaurants</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa-solid fa-star"></i> A propos</a>
          </li>

          
          <li className="nav-item ">
            <a className="nav-link cart-link" href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
