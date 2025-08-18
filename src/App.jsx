import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './componants/Navbar';
import HeroSection from './componants/HeroSection';
import HowWorks from './componants/HowWorks';
import Services from './componants/Services';
import WhyUs from './componants/WhyUs';
const App = () => {
  return (
    <>
     <Navbar />
     <HeroSection />
     <HowWorks />
     <Services />
     <WhyUs />
    </>
  )
}

export default App
