import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './componants/Navbar';
import HeroSection from './componants/HeroSection';
import HowWorks from './componants/HowWorks';
import Services from './componants/Services';
import WhyUs from './componants/WhyUs';
import Gallery from './componants/Gallery';
import Footer from './componants/Footer';
import Restaurants from './componants/Restaurants';
import ListRestaurants from './componants/ListRestaurants';
import WhatsappButton from './componants/WhatsappButton';
import MenuRestaurant from './componants/MenuRestaurant';
const App = () => {
  return (
    
    <>
    <Router>

     <Navbar />
   <WhatsappButton />
     <Routes>
      <Route path='/' element={
        <>
         <HeroSection />
         <Services />
         <WhyUs />
         <Gallery />
         <HowWorks />
        </>
        } />

        <Route path='/restaurants' element={
          <>
          <Restaurants />
          <ListRestaurants />
          
          </>
          
          } />

          <Route path='/menu/:id' element={<MenuRestaurant />} />

     </Routes>
     
    
     <Footer />

    </ Router>
    </>
    
  )
}

export default App
