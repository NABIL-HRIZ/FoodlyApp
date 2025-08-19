import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-content'>
 <ul className="wrapper">
    <li className="icon facebook">
      <span><i className="fab fa-facebook-f"></i></span>
    </li>
    <li className ="icon youtube">
      <span><i className="fab fa-youtube"></i></span>
    </li>
    <li className="icon tiktok">
      <span><i className="fab fa-tiktok"></i></span>
    </li>
    <li className="icon instagram">
      <span><i className="fab fa-instagram"></i></span>
    </li>
  </ul>
            </div>
            <div className='footer-end'>
                <h3>@2025, Toutes les droites réservés</h3>

            </div>
     
    </div>
  )
}

export default Footer
