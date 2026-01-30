import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Formations',
      description:
        'High level overviews, approaches lverall value proposition. Organically grow the holistic world view of disruptive.',
      colorClass: 'service-green',
      iconClass: 'fas fa-graduation-cap',
    },
    {
      id: 2,
      title: 'Ma Bourse',
      description:
        'High level overviews, approaches lverall value proposition. Organically grow the holistic world view of disruptive.',
      colorClass: 'service-orange',
      iconClass: 'fas fa-link',
    },
    {
      id: 3,
      title: "Demande d'hébergement",
      description:
        'High level overviews, approaches lverall value proposition. Organically grow the holistic world view of disruptive.',
      colorClass: 'service-purple',
      iconClass: 'fas fa-home',
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Nos services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.colorClass}`}>
              <div className="service-icon-circle">
                <i className={service.iconClass}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
