import React from 'react';

const Mediatheque = () => {
  const videos = [
    {
      id: 1,
      thumbnail: 'images/media1.jpg',
      duration: '3:17',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elium',
      channel: 'Morocco Alumni',
      views: '126k views • 2 hours ago',
      icon: 'images/logo.png',
    },
    {
      id: 2,
      thumbnail: 'images/media2.png',
      duration: '52:39:40',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elium',
      channel: 'Morocco Alumni',
      views: '35k views • 3 months ago',
      icon: 'images/logo.png',
    },
    {
      id: 3,
      thumbnail: 'images/media3.png',
      duration: '56:13',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elium',
      channel: 'Morocco Alumni',
      views: '663k views • 5 months ago',
      icon: 'images/logo.png',
    },
    {
      id: 4,
      thumbnail: 'images/media4.jpg',
      duration: '01:11:13',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elium',
      channel: 'Jeremy Yelson',
      views: '663k views • 5 months ago',
      icon: 'images/logo.png',
    },
  ];

  return (
    <section className="mediatheque">
      <div className="container">
        <h2>Médiathèque</h2>
        <div className="media-grid">
          {videos.map((video) => (
            <div key={video.id} className="media-video">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <span className="duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <img src={video.icon} className="channel-icon" alt={video.channel} />
                <div>
                  <h4>{video.title}</h4>
                  <p>{video.channel}</p>
                  <p>{video.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-voir-rectangle">Voir toute la médiathèque</button>
      </div>
    </section>
  );
};

export default Mediatheque;