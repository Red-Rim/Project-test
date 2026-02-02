import React from 'react';

const Stats = () => {
  const stats = [
    { value: '8,640', label: 'Étudiants' },
    { value: '40', label: 'Lauréats inscrits' },
    { value: '40', label: 'Associations inscrites' },
    { value: '4', label: 'Partenaires inscrits' },
  ];

  return (
    <section className="stats">
      <div className="container">
        <h2>Chiffres clés</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;