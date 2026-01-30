import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Actualites from './components/Actualites';
import Jobs from './components/Jobs';
import Stats from './components/Stats';
import Leaders from './components/Leaders';
import Testimonials from './components/Testimonials';
import Mediatheque from './components/Mediatheque';
import Partners from './components/Partners';
import Footer from './components/Footer';
import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Actualites />
      <Jobs />
      <Stats />
      <Leaders />
      <Testimonials />
      <Mediatheque />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;