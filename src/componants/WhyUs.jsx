import React from 'react';
import '../styles/WhyUs.css';
import img from '../assets/why-us-img.jpg'
const WhyUs = () => {
  return (
    <div className='why-us-section'>
      <div className='why-us-container'>
        <div className='why-us-img'>
         <img src={img} alt="" />
        </div>
        
        <div className="why-us-content">
          <div className="content-wrapper">
            <h2>Pourquoi Nous Choisir ?</h2>
            <p className="subtitle">Nous mettons un point d'honneur à vous offrir rapidité, fraîcheur et saveur à chaque commande</p>
            <p className="highlight">Parce que chaque repas mérite d'être exceptionnel ! Votre satisfaction est notre priorité, du premier clic jusqu'à la dernière bouchée.</p>
            
            <div className='why-us-list'>
              <div className='list-item'>
                <div className='icon-container' style={{backgroundColor: '#3E0703'}}>
                  <span>🚴‍♂️</span>
                </div>
                <div className='list-text'>Livraison rapide</div>
              </div>
              
              <div className='list-item'>
                <div className='icon-container' style={{backgroundColor: '#E4004B'}}>
                  <span>🥗</span>
                </div>
                <div className='list-text'>Produits frais chaque jour</div>
              </div>
              
              <div className='list-item'>
                <div className='icon-container' style={{backgroundColor: '#FAD691'}}>
                  <span>🌱</span>
                </div>
                <div className='list-text'>Options vegan et healthy</div>
              </div>
              
              <div className='list-item'>
                <div className='icon-container' style={{backgroundColor: '#ED775A'}}>
                  <span>💳</span>
                </div>
                <div className='list-text'>Paiement sécurisé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;