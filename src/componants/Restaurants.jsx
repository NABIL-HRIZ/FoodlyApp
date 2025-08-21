
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Restaurants.css';

import { Autoplay} from 'swiper/modules';

import '../styles/Restaurants.css'
import rest1 from '../assets/hero-slider-1.jpg'
import rest2 from '../assets/hero-slider-2.jpg'
import rest3 from '../assets/hero-slider-3.jpg'





const Restaurants = () => {
 return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
             <SwiperSlide>
         <img src={rest3} alt="Restaurant 1" />
          <div className="rest-info">
            <h2>Discover the Best Restaurants</h2>
              <p>Find top-rated places near you and enjoy unique culinary
              experiences tailored to your taste.</p>
            
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
         <img src={rest1} alt="Restaurant 1" />
          <div className="rest-info">
            <h2>Special Offers & Promotions</h2>
            <p>Save more while exploring delicious food from your favorite
              restaurants.</p>
          </div>

        </SwiperSlide>
         <SwiperSlide>
         <img src={rest2} alt="Restaurant 1" />
          <div className="rest-info">
            <h2>Fresh & Healthy Choices</h2>
            <p>Whether you're craving fast food or healthy meals, we’ve got you
              covered anytime, anywhere</p>
          </div>

        </SwiperSlide>
    
        
      </Swiper>
    </>
  );
}


export default Restaurants
