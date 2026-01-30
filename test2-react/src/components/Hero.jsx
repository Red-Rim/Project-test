import React from 'react';

const Hero = () => {
  const avatars = [
    { id: 1, img: '/images/avatar1.png' },
    { id: 2, img: '/images/avatar2.png' },
    { id: 3, img: '/images/avatar3.png' },
    { id: 4, img: '/images/avatar4.png' },
    { id: 5, img: '/images/avatar5.png' },
    { id: 6, img: '/images/avatar6.png' },
    { id: 7, img: '/images/avatar7.png' },
    { id: 8, img: '/images/avatar8.png' },
    { id: 9, img: '/images/avatar9.png' },
    { id: 10, img: '/images/avatar10.jpg' },
    { id: 11, img: '/images/avatar11.jpg' },
    { id: 12, img: '/images/avatar12.jpg' },
    { id: 13, img: '/images/avatar13.jpg' },
    { id: 14, img: '/images/avatar14.jpg' },
    { id: 15, img: '/images/avatar15.jpg' },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Le point de rencontre<br />des leaders</h1>
            <p>
              Morocco Alumni est une plateforme créée par l’Agence Marocaine de Coopération Internationale qui a pour vocation de rassembler les anciens étudiants de la coopération du Royaume du Maroc autour d’un réseau mondial de lauréats de notre pays..
            </p>
            <button className="btn-rejoindre">Rejoindre la communauté</button>
          </div>

          <div className="hero-hexagons">
            {avatars.map((avatar) => (
              <div key={avatar.id} className={`hexagon`}>
                <img src={avatar.img} alt={`Avatar`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;