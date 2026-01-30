import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Distinctively re-engineer revolutionary services and premium  At vero accusamus et iustoDignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores .',
      author: 'Victor Murphy',
      role: 'Manager',
      avatar: '/images/avatar7.png',
    },
    {
      id: 2,
      text: 'Completely synergize resource taxing <strong>relationships</strong> via premier. Professionally cultivate one-to-one customer service with robust ideas.',
      text2: 'Dynamically <strong>innovate resource-leveling customer</strong> service for state of the art customer service.',
      author: 'Ne Peeter Walker',
      role: 'Responsable',
      avatar: '/images/avatar8.png',
    },
    {
      id: 3,
      text: 'Distinctively re-engineer revolutionary service and <strong>premium</strong> At vero accusamus et iusto blandiris praesentum.',
      author: 'Nan Petty Calvin',
      role: 'President directeur général',
      avatar: '/images/avatar9.png',
    },
    {
      id: 4,
      text: 'Proactively envisioned multimedia based expertise and <strong>cross-media growth strategies</strong>. Seamlessly visualize quality intellectual capital.',
      text2: 'Phosfluorescently engage methodologi with web-enabled technology.',
      author: 'Nancy Mithi',
      role: 'Manager',
      avatar: '/images/avatar10.jpg',
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>Témoignages</h2>
          <div className="controls">
            <button className="control-btn control-prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="control-btn control-next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <p dangerouslySetInnerHTML={{ __html: t.text }} />
              {t.text2 && <p dangerouslySetInnerHTML={{ __html: t.text2 }} />}
              <div className="author">
                <img src={t.avatar} alt={t.author} />
                <div>
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;