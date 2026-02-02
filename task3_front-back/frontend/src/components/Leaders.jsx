import React from 'react';

const Leaders = () => {
  const leaders = [
    { id: 1, img: '/images/avatar1.png', name: 'Anna Smith', role: 'Alumni'},
    { id: 2, img: '/images/avatar2.png', name: 'Anna Smith', role: 'Alumni'},
    { id: 3, img: '/images/avatar3.png', name: 'Anna Smith', role: 'Alumni'},
    { id: 4, img: '/images/avatar4.png', name: 'Anna Smith', role: 'Alumni'},
    { id: 5, img: '/images/avatar5.png', name: 'Anna Smith', role: 'Alumni'},
    { id: 6, img: '/images/avatar6.png', name: 'Anna Smith', role: 'Alumni'},
  ];

  return (
    <section className="leaders">
      <div className="container">
        <div className="leaders-content">
          <div className="leaders-circle">
            <h2>
              Leaders autour
              <br />
              du monde
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="controls">
              <button className="control-btn">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="control-btn">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="leaders-grid">
            {leaders.map((leader) => (
              <div key={leader.id} className="leader">
                <div className={`leader-hex`}>
                  <img src={leader.img} alt={leader.name} />
                </div>
                <h4>{leader.name}</h4>
                <p>{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="btn-voir-rectangle">Voir tous les leaders</button>
      </div>
    </section>
  );
};

export default Leaders;
