import React, { useState } from 'react';

const Actualites = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Toutes les actualités' },
    { id: 'divers', label: 'Divers' },
    { id: 'events', label: 'Événements' },
    { id: 'world', label: 'Monde' },
  ];

  const news = [
    {
      id: 1,
      image: '/images/actua1.png',
      date: 'Published in Insight Jan 30, 2024',
      title: 'Un exemple de titre',
      text: "In this article, we'll cover how to create user flows",
    },
    {
      id: 2,
      image: '/images/actua23.png',
      date: 'Published in Insight Jan 30, 2024',
      title: 'Un deuxième exemple de titre',
      text: 'What are Design Principles?... To understand design principles.',
    },
    {
      id: 3,
      image: '/images/actua23.png',
      date: 'Published in Insight Jan 30, 2024',
      title: 'Un troisième exemple de titre',
      text: 'What are Design Principles?... To understand design principles.',
    },
  ];

  return (
    <section className="actualites">
      <div className="container">
        <h2>Actualités</h2>

        <div className="filters-simple">
          {filters.map((filter) => (
            <a
              key={filter.id}
              href="#"
              className={`filter-link ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter(filter.id);
              }}
            >
              {filter.label}
            </a>
          ))}
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-item">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <p className="news-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="news-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualites;