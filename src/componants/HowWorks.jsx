import React from 'react'
import img1 from '../assets/logo_icon.webp'
import img2 from '../assets/order.png'
import img3 from '../assets/done.png'
import '../styles/HowWorks.css'
const HowWorks = () => {
  return (
    <div className='how-section'>
        <h1>Comment ça marche</h1>
        <p>Commandez en 3 étapes sans aucun frais supplémentaire</p>
        <div className='how-content'>
            <div className='how-card'>
                <img src={img1} alt="" />

                <h3>Choisissez votre plat</h3>
                <p>Sélectionnez le plat qui vous convient</p>

            </div>
            <div className='how-card'>
                <img src={img2} alt="" />

                <h3>Passez votre commande</h3>
                <p>Commandez votre repas en ligne</p>

            </div>

             <div className='how-card'>
                <img src={img3} alt="" />
                <h3>Goûtez la fraîcheur</h3>
                <p>Des plats frais, faits chaque jour pour vous</p>

            </div>
            

        </div>
      
    </div>
  )
}

export default HowWorks
