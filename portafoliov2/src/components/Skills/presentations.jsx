
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
        title: 'Surveillance video summarization based on trajectory rarity measure',
        url: 'https://www.youtube.com/watch?v=4SyFgbgOFao',
        description: 'UCPS presentation'
    },
    {
        title: 'Data Science Foundations',
        url: 'https://www.youtube.com/watch?v=WX-4zWx1tqc&t=68s',
        description: 'TCC - USP'
    },
    {
        title: 'Machine Learning in Practice',
        url: 'https://youtu.be/ZbFNX5sYqrg?t=23603',
        description: 'CLEI 2021 - Conference on Latin American Computing'
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
          I have delivered presentations on various topics related to data science, machine learning, and computer vision.
          These talks have been shared in academic settings, conferences, and workshops, where I have explained practical
          ideas in a clear and accessible way for students and professionals.
        </span>
      </div>

      <div className="parallax-container">

        <div className="content-section">
            <h3>Past talks and workshops</h3>
            <p>Here are three examples of presentations I have shared over time.</p>
            <div className="presentationGrid">
                {presentations.map((item) => (
                <article className="presentationCard" key={item.title}>
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