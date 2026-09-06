import React, { useState, useEffect } from 'react';
import './works.css';

// Importar componentes y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Portfolio1 from '../../assets/dev-wordpress.png';
import Portfolio2 from '../../assets/truchas-prj.png';
import Portfolio3 from '../../assets/calibracion-realidad-aumentada.png';
import Portfolio4 from '../../assets/lending-risk-prediction.png';
import Portfolio5 from '../../assets/traffic-analysis.png';
import Portfolio6 from '../../assets/resumen-videos-vigilancia.png';

import Portfolio7 from '../../assets/mercado-juliaca.png';
import Portfolio7_1 from '../../assets/mercado_juliaca01.png';
import Portfolio7_2 from '../../assets/mercado_juliaca02.png';

import Portfolio8 from '../../assets/GERESA.png';
import Portfolio8_1 from '../../assets/GERESA01.png';
import Portfolio8_2 from '../../assets/GERESA02.png';

const projects = [
  {
    id: 1,
    title: 'Web Development with WordPress and Digital Marketing',
    desc: 'Created and optimized functional websites for digital marketing, maximizing reach',
    img: Portfolio1,
    images: [Portfolio1],
    link: 'https://lizmarinpnl.com/'
  },
  {
    id: 2,
    title: 'Trout Weight Estimation via Computer Vision',
    desc: 'Implemented a computer vision system for trout weight estimation, utilizing Deep Learning techniques and the OpenCV library',
    img: Portfolio2,
    images: [Portfolio2],
    link: 'https://youtu.be/PsYIA7CkJCM'
  },
  {
    id: 3,
    title: 'Augmented Reality and Camera Calibration',
    desc: 'Developed augmented reality applications with precise camera calibration, employing OpenGL, image segmentation, and C++ programming',
    img: Portfolio3,
    images: [Portfolio3],
    link: 'https://bitbucket.org/marbramen/cg_augrea/src/master/'
  },
  {
    id: 4,
    title: 'Credit Risk Prediction (Data Science)',
    desc: 'Built an end-to-end Machine Learning model for credit risk prediction, covering data ingestion, model evaluation, and production deployment',
    img: Portfolio4,
    images: [Portfolio4],
    link: null
  },
  {
    id: 5,
    title: 'Anomalous Trajectory Detection in Intelligent Transport',
    desc: 'Designed and implemented an application to identify anomalous trajectories in intelligent transport systems, managing and analyzing large volumes of data',
    img: Portfolio5,
    images: [Portfolio5],
    link: 'https://repositorio.unsaac.edu.pe/bitstream/handle/20.500.12918/7434/253T20220603_TC.pdf?sequence=1&isAllowed=y'
  },
  {
    id: 6,
    title: 'Surveillance Video Summary Extraction',
    desc: 'Developed a solution for the automatic generation of surveillance video summaries, applying unsupervised learning techniques and semantic information extraction',
    img: Portfolio6,
    images: [Portfolio6],
    link: 'https://repositorio.ucsp.edu.pe/item/0d31bbc1-d548-42b2-b743-4eb5ef4e9c26'
  },
  {
    id: 7,
    title: 'E-Commerce Platform Development (Django & React)',
    desc: 'Full-stack development of an e-commerce platform using Django for backend services and React for an interactive frontend user experience',
    img: Portfolio7,
    images: [Portfolio7, Portfolio7_1, Portfolio7_2],
    link: null
  },
  {
    id: 8,
    title: 'Maternal Health Statistical Indicators',
    desc: 'Generation of PowerBI dashboards, integrating data sources such as SIS and MINSA. Data Analytics work',
    img: Portfolio8,
    images: [Portfolio8, Portfolio8_1, Portfolio8_2],
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYjQyYzA5YTUtOTU5MS00YmUxLTgwMTEtM2ZhMGM2OTI2ZDkwIiwidCI6ImExMTQxY2VhLWY2NjYtNGUxMS1hNzAzLWQ3MjEzNDBkNjQ0NCIsImMiOjR9'
  }
];

const finalSlide = projects.length - 1;

export const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (project, initialIndex = 0) => {
    const images = project.images && project.images.length > 0 ? project.images : [project.img];
    setSelectedProject({ ...project, images });
    setCurrentImgIndex(initialIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImgIndex(0);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="works">
      <h2 className="worksTitle">Some Projects</h2>
      <span className="worksDesc">
        My experience spans a wide range of projects, from web development with WordPress to implementing advanced solutions in computer vision, augmented reality, and data science. I've worked on trout weight estimation using computer vision, camera calibration for augmented reality, credit risk prediction using data science, anomalous trajectory detection in intelligent transport systems, and summary extraction from surveillance videos. Each project has been an opportunity to apply and expand my knowledge in technology and innovation.
      </span>

      <div className="worksImgs">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          dir="rtl"
          initialSlide={finalSlide}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }
          }}
          className="projectsSwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="box-project">
                <img
                  src={project.img}
                  alt={project.title}
                  className="worksImg"
                  onClick={() => openModal(project)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-actions">
                    <button className="projectZoomBtn" onClick={() => openModal(project)}>
                      🔍 Ampliar
                    </button>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLinkBtn">
                        Ver Proyecto
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }
          }}
          className="projectsSwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="box-project">
                <img
                  src={project.img}
                  alt={project.title}
                  className="worksImg"
                  onClick={() => openModal(project)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-actions">
                    <button className="projectZoomBtn" onClick={() => openModal(project)}>
                      🔍 Ampliar
                    </button>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLinkBtn">
                        Ver Proyecto
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <a href="https://github.com/fryzito/" target="_blank" rel="noopener noreferrer">
        <button className="workBtn">See More...</button>
      </a>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Cerrar modal">
              ✕
            </button>

            <div className="modal-image-wrapper">
              {selectedProject.images.length > 1 && (
                <button className="modal-nav-btn prev" onClick={prevImage} aria-label="Imagen anterior">
                  ‹
                </button>
              )}

              <img
                src={selectedProject.images[currentImgIndex]}
                alt={selectedProject.title}
                className="modal-image"
              />

              {selectedProject.images.length > 1 && (
                <button className="modal-nav-btn next" onClick={nextImage} aria-label="Siguiente imagen">
                  ›
                </button>
              )}
            </div>

            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.desc}</p>

              {selectedProject.images.length > 1 && (
                <div className="modal-thumbnails">
                  {selectedProject.images.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`Vista previa ${idx + 1}`}
                      className={`modal-thumb ${idx === currentImgIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImgIndex(idx)}
                    />
                  ))}
                </div>
              )}

              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="projectLinkBtn modalLinkBtn">
                  Ver Proyecto
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;