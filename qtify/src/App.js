import React from 'react';
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from './Component/Hero/HeroSection';

const App = () => {
  return (
   <>
      <Navbar/>
      <HeroSection 
      heading1="100 Thousand Songs, ad-free"
      heading2="Over thousands podcast episodes"/>
   </>
  )
}

export default App;