import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import MapSection from '../Map' // import the map here
 

const location = {
  // address: '1600 Amphitheatre Parkway, Mountain View, california.',
  address: '231 R. Lázara Menezes de Oliveira, São José dos Campos, São Paulo',
  lat: -23.2580397,
  lng: -45.8827831,
}

function Home() {
  return (
    <>
      <HeroSection />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
      <Footer /> 
    </>
  );
}

export default Home;