import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <AboutUs />
      <Mission />
      <Vision />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
