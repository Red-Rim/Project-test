import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="social-icons">
            <a href="#"><img src="/images/us.png" alt="US" /></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fas fa-search"></i></a>
          </div>

          <div className="logo">
            <img src="/images/logo.png" alt="Morocco Alumni" />
          </div>

          <div className="header-buttons">
            <button className="btn-devenir">Devenir membre</button>
            <button className="btn-espace">Espace membres</button>
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#qui-sommes-nous">Qui sommes-nous</a>
          <a href="#actualites">Actualités</a>
          <a href="#evenements">Événements</a>
          <a href="#leaders">Nos leaders</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;