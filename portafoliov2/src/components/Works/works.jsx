import React from 'react';
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

const projects = [
  {
    id: 1,
    title: 'Desarrollo Web & Marketing',
    desc: 'Creación y optimización de sitios web funcionales en WordPress para marketing digital.',
    img: Portfolio1,
    link: 'https://lizmarinpnl.com/'
  },
  {
    id: 2,
    title: 'Estimación de Peso en Truchas',
    desc: 'Sistema de visión por computadora usando Deep Learning y OpenCV.',
    img: Portfolio2,
    link: 'https://youtu.be/PsYIA7CkJCM'
  },
  {
    id: 3,
    title: 'Realidad Aumentada & Calibración',
    desc: 'Aplicación AR con calibración precisa de cámara usando C++ y OpenGL.',
    img: Portfolio3,
    link: 'https://bitbucket.org/marbramen/cg_augrea/src/master/'
  },
  {
    id: 4,
    title: 'Predicción de Riesgo Crediticio',
    desc: 'Modelo Machine Learning End-to-End para evaluación de riesgo.',
    img: Portfolio4,
    link: null
  },
  {
    id: 5,
    title: 'Detección de Trayectorias Anómalas',
    desc: 'Identificación de anomalías en sistemas de transporte inteligentes.',
    img: Portfolio5,
    link: 'https://repositorio.unsaac.edu.pe/bitstream/handle/20.500.12918/7434/253T20220603_TC.pdf?sequence=1&isAllowed=y'
  },
  {
    id: 6,
    title: 'Resumen de Videos de Vigilancia',
    desc: 'Generación automática de resúmenes usando aprendizaje no supervisado.',
    img: Portfolio6,
    link: 'https://repositorio.ucsp.edu.pe/item/0d31bbc1-d548-42b2-b743-4eb5ef4e9c26'
  }
];

const finalSlide = projects.length - 1;

export const Works = () => {
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
          spaceBetween={25}
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
                <img src={project.img} alt={project.title} className="worksImg" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink">
                      Ver Proyecto →
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
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
                <img src={project.img} alt={project.title} className="worksImg" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink">
                      Ver Proyecto →
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <a href="https://github.com/fryzito/" target="_blank" rel="noopener noreferrer">
        <button className="workBtn">See More...</button>
      </a>
    </section>
  );
};

export default Works;