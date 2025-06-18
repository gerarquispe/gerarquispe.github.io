import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/dev-wordpress.png';
import Portfolio2 from '../../assets/truchas-prj.png';
import Portfolio3 from '../../assets/calibracion-realidad-aumentada.png';
import Portfolio4 from '../../assets/lending-risk-prediction.png';
import Portfolio5 from '../../assets/traffic-analysis.png';
import Portfolio6 from '../../assets/resumen-videos-vigilancia.png';
export const works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">My experience spans a wide range of projects, from web development with WordPress to implementing advanced solutions in computer vision, augmented reality, and data science. I've worked on trout weight estimation using computer vision, camera calibration for augmented reality, credit risk prediction using data science, anomalous trajectory detection in intelligent transport systems, and summary extraction from surveillance videos. Each project has been an opportunity to apply and expand my knowledge in technology and innovation.</span>
        <div className="worksImgs">
          <div className='box-project'>
            <a href='https://dys-contadores.com/' target='_blank' rel="nopener noreferrer">
              <img src={Portfolio1} alt="" className="worksImg" />
              <p >Web Development with WordPress and Digital Marketing: Created and optimized functional websites for digital marketing, maximizing reach</p>
            </a>
          </div>

          <div className='box-project'>
            <a href='https://youtu.be/PsYIA7CkJCM' target='_blank' rel="nopener noreferrer">
              <img src={Portfolio2} alt="" className="worksImg" />
              <p>Trout Weight Estimation via Computer Vision: Implemented a computer vision system for trout weight estimation, utilizing Deep Learning techniques and the OpenCV library</p>
            </a>
          </div>

          <div className='box-project'>
            <a href='https://bitbucket.org/marbramen/cg_augrea/src/master/' target='_blank' rel="nopener noreferrer">
              <img src={Portfolio3} alt="" className="worksImg" />
              <p>Augmented Reality and Camera Calibration: Developed augmented reality applications with precise camera calibration, employing OpenGL, image segmentation, and C++ programming</p>              
            </a>
          </div>

          <div className='box-project'>
            <img src={Portfolio4} alt="" className="worksImg" />
            <p>Credit Risk Prediction (Data Science): Built an end-to-end Machine Learning model for credit risk prediction, covering data ingestion, model evaluation, and production deployment</p>
          </div>

          <div className='box-project'>
            <a href='https://repositorio.unsaac.edu.pe/bitstream/handle/20.500.12918/7434/253T20220603_TC.pdf?sequence=1&isAllowed=y' target='_blank' rel="nopener noreferrer">
              <img src={Portfolio5} alt="" className="worksImg" />
              <p>Anomalous Trajectory Detection in Intelligent Transport: Designed and implemented an application to identify anomalous trajectories in intelligent transport systems, managing and analyzing large volumes of data</p>
            </a>
          </div>

          <div className='box-project'>
            <a href='https://repositorio.ucsp.edu.pe/item/0d31bbc1-d548-42b2-b743-4eb5ef4e9c26' target='_blank' rel="nopener noreferrer">
              <img src={Portfolio6} alt="" className="worksImg" />
              <p>Surveillance Video Summary Extraction: Developed a solution for the automatic generation of surveillance video summaries, applying unsupervised learning techniques and semantic information extraction</p>
            </a>
          </div>

        </div>

        <a href="https://github.com/fryzito/" target="_blank" rel="noopener noreferrer">
          <button className="workBtn">
            See More...
          </button>
        </a>

    </section>
  )
}

export default works