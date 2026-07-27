
import './presentations.css';

const getEmbedUrl = (url) => {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/);
  const videoId = videoIdMatch?.[1];

  if (!videoId) {
    return url;
  }

  const startMatch = url.match(/[?&](?:start|t)=([0-9]+)/i);
  const start = startMatch?.[1];

  return `https://www.youtube-nocookie.com/embed/${videoId}${start ? `?start=${start}` : ''}`;
};

const presentations = [
    {
        title: 'A PUBLIC TRANSIT NETWORK ANALYSIS WITH DATA PROCESSING',
        url: 'https://www.youtube.com/watch?v=WX-4zWx1tqc&t=68s',
        description: 'This was the final project for my MBA at the ICMC - University of São Paulo.',
        year: 2024
    },
    {
        title: 'Surveillance video summarization based on trajectory rarity measure',
        url: 'https://www.youtube.com/watch?v=4SyFgbgOFao',
        description: 'A summary of my thesis presentation at the Universidad Católica San Pablo.',
        year: 2019
    },
    {
        title: 'CLEI 2021 - Conference on Latin American Computing',
        url: 'https://youtu.be/ZbFNX5sYqrg?t=23603',
        description: 'Presentation at CLEI 2021 - Conference on Latin American Computing, the work was classified as one of the best papers of the conference, inviting me to publish it in the journal of the conference.',
        year: 2021
    }
].map((item) => ({
  ...item,
  embedUrl: getEmbedUrl(item.url)
}));

const Presentations = () => {
  return (
    <section id="presentations" className="presentationsSection">
      <div className="presentationIntro">
        <span className="skillTitle">Some Presentations</span>
        <span className="skillDesc">
          Throughout my career, I have had the opportunity to present on topics I am passionate about, such as data processing, machine learning, and computer vision. My goal in every talk, whether in an academic setting or a workshop, is to break down complex research topics and technical content in a way that is clear and accessible to everyone. Below, you will find some examples of my presentations.
        </span>
      </div>

      <div className="parallax-container">
        <div>
          <div className="presentationGrid">
            {presentations.map((item) => (
                <article className="presentationCard" key={item.title}>
                    <h2>{item.year}</h2>
                    <hr/>
                    <div className="presentationVideo">
                        <iframe
                        src={item.embedUrl}
                        title={item.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        />
                    </div>
                    <div className="presentationCardContent">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;