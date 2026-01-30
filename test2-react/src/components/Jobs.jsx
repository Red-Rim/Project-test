import React from 'react';

const Jobs = () => {
  const jobs = Array(8).fill({
    badge: 'Stage',
    title: 'Responsable',
    company: 'Attijari wafabank',
    description: "Aperçu de l'offre à mettre ici",
  });

  return (
    <section className="jobs">
      <div className="container">
        <h2>Offres d'emploi</h2>
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-left">
                <div className="job-avatar">
                  <span className="job-badge">{job.badge}</span>
                </div>
              </div>
              <div className="job-right">
                <h4>{job.title}</h4>
                <div className="job-company">
                  <img src="images/logo_amci.png" alt="attijari" />
                  <span>{job.company}</span>
                </div>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-voir-rectangle">Voir tous les offres</button>
      </div>
    </section>
  );
};

export default Jobs;