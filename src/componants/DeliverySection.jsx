import React from 'react'
import video from '../assets/video.mp4'
import '../styles/DeliverySection.css'
import { Link } from 'react-router-dom'
const DeliverySection = () => {
  return (
    <section className="delivery-section">
      <div className="video-overlay">
        <video 
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="delivery-video"
        />
        <div className="video-content">
          <Link to='/restaurants' className="order-btn" style={{textDecoration:'none',fontFamily:"Protest Riot"}}>Trouvez une restaurant ?</Link>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection
