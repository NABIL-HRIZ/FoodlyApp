import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './componants/Navbar';
import HeroSection from './componants/HeroSection';
import HowWorks from './componants/HowWorks';
const App = () => {
  return (
    <>
     <Navbar />
     <HeroSection />
     <HowWorks />
    </>
  )
}

export default App
