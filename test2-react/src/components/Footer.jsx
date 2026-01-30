import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Merci pour votre inscription ! 🎉');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>A propos</h3>
            <p>
              Morocco Alumni est une plateforme créée par l'Agence Marocaine de
              Coopération Internationale qui a pour vocation de rassembler les
              anciens étudiants de la coopération du Royaume du Maroc autour
              d'un réseau mondial de lauréats de notre pays.
            </p>
            <p>
              <strong>Email :</strong> email@moroccoalumni.com
            </p>
            <p>
              <strong>Téléphone :</strong> +880 123 456 789
            </p>
          </div>

          <div className="footer-col">
            <h3>Liens</h3>
            <ul>
              <li>
                <a href="#">Qui sommes-nous</a>
              </li>
              <li>
                <a href="#">Actualités</a>
              </li>
              <li>
                <a href="#">Événements</a>
              </li>
              <li>
                <a href="#">Nos leaders</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Newslettre hebdomadaire</h3>
            <p>Recevez des articles de blog et des offres par e-mail.</p>
            <form className="newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Votre Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">S'inscrire</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <img src="/images/logo.png" alt="Logo" className="footer-logo" />
            <p>© MoroccoAlumni 2024. All Rights Reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;