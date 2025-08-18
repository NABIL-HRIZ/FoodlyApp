import React from 'react'
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import service4 from '../assets/service-4.jpg'

import '../styles/Services.css'

const Services = () => {
  return (
    <div className='services-section'>
        <h1>Nous offrons de première qualité</h1>
        <p>Goûtez l’excellence dans chaque bouchée ,qualité et goût, à chaque commande.</p>
          <div className="services-item">
            <div className=' service-card'>
                <img src={service1} alt="" />
                <h2>Snacks & Fast Food</h2>

            </div>

            <div className='service-card'>
                <img src={service2} alt="" />
                <h2>Déjeuner , Dîner</h2>

            </div>

            <div className='service-card'>
                <img src={service4} alt="" />
                <h2>Menus spéciaux</h2>


            </div>

            <div className='service-card'>
                <img src={service3} alt="" />
                <h2>Boissons & Jus frais</h2>


            </div>

          </div>
      
    </div>
  )
}

export default Services
