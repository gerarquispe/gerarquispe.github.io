import React from 'react';
import './publications.css';
import imgPublication from '../../img/anomalousITS12.png';
import tccGerar from '../../img/TSenseDetection.png';
import procceding from '../../img/g5702.png';
import thesisMaster from '../../img/imagresumen.png';
import tesisPregrado from '../../img/compare_fourier_wavelet_v2.png';

const Publications = () => {

  const paper1 = () => {
    return (
      <>
      <h2>2024</h2>
      <div className='publication'>
        <div className='publication-content'>
          <h4>A Public Transit Network Analysis with Data Processing</h4>
          <p>Gerar F. Quispe-Torres and Jean Roberto Ponciano.</p>
          <p>In Biblioteca de Trabalhos Acadêmicos da Universidad de São Paulo.</p>
          <p>Trabalho de Conclusão de Curso - MBA em Inteligência Artificial e Big Data.</p>
          <a className='publication-content' 
            target="_blank" rel="noopener noreferrer"
            href='https://bdta.abcd.usp.br/directbitstream/802c10bb-086b-4c02-a30f-96b51dea9c02/Gerar_Francias_Quispe_Torres.pdf'>
              <p>TCC</p>
          </a>
        </div>
        <div className='publication-img'>
          <img src={tccGerar} alt='Transit Network Analysis' height={200} />
        </div>
      </div>
      </>
    );
  };
  

  const paper5 = () => {
    return (
      <>
      <h2>2022</h2>
      <div className='publication'>
        <div className='publication-content'>
          <h4>Análisis comparativo de la performance de los descriptores Wavelet y Fourier, aplicado a la detección de anomalías en trayectorias.</h4>
          <p>Gerar F. Quispe-Torres</p>
          <p>In Universidad Nacional de San Antonio Abad del Cusco.</p>
          <p>Tesis de Pregrado</p>
          <a className='publication-content' 
            target="_blank" rel="noopener noreferrer"
            href='https://repositorio.unsaac.edu.pe/bitstream/handle/20.500.12918/7434/253T20220603_TC.pdf?sequence=1'>
              <p>Tesis</p>
          </a>
        </div>
        <div className='publication-img'>
          <img src={tesisPregrado} alt='Descriptor de Trayectorias' height={200} />
        </div>
      </div>
      </>
    );
  };

  const paper2 = () => {
    return(
      <>
      <h2 >2022</h2>
      <div className='publication'>
        <div className='publication-content'>
          <h4>A Feature-based Trajectory Anomaly Detection</h4>
          <p>Gerar F. Quispe-Torres, Lauro Enciso-Rodas, Harley Vera-Olivera, Germain Garcia-Zanabria</p>
          <p>In CLEI electronic journal, Volume 25, Number 2, Paper 3, May 2022</p>
          <a className='publication-content' 
            target="_blank" rel="noopener noreferrer"
            href='https://doi.org/10.19153/cleiej.25.2.3'>
              <p>DOI:https://doi.org/10.19153/cleiej.25.2.3</p>
          </a>
        </div>
        <div className='publication-img'>
          <img src={imgPublication} alt='trajectory anomaly detection' width={300}/>
        </div>
      </div>
      </>
    );
  };

  const paper3 = () => {
    return (
      <>
      <h2> 2021</h2>
      <div className='publication'>
        <div className='publication-content'>
          <h4>Trajectory anomaly detection based on similarity analysis</h4>
          <p>Gerar F Quispe-Torres, Germain Garcia-Zanabria, Harley Vera-Olivera, Lauro Enciso-Rodas</p>
          <p>In 2021 XLVII Latin American Computing Conference (CLEI)</p>
          <a className='publication-content' 
            target="_blank" rel="noopener noreferrer"
            href='https://doi.org/10.1109/CLEI53233.2021.9639966'>
            <p>https://doi.org/10.1109/CLEI53233.2021.9639966</p>
          </a>
        </div>
        <div className='publication-img'>
          <img src={procceding} alt='trajectory anomaly detection' height={250}/>
        </div>
      </div>
      </>
    );
  };

  const paper4 = () => {
    return (
      <>
      <h2> 2019 </h2>
      <div className='publication'>
        <div className='publication-content'>
          <h4>Surveillance video summarization based on trajectory rarity measure</h4>
          <p>Gerar Francis Quispe Torres, Rensso Victor Hugo Mora Colque, William Robson Schwartz</p>
          <p>In Universidad Católica San Pablo</p>
          <a className='publication-content' 
            target="_blank" rel="noopener noreferrer"
            href='https://core.ac.uk/download/pdf/269026950.pdf'>
              <p>Master Thesis</p>
          </a>
        </div>
        <div className='publication-img'>
          <img src={thesisMaster} alt='video summarization' width={290}/>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Publications</h1>
        <p>Here, you'll find my publications listed in reverse chronological order. If you have any questions or would like to discuss a specific publication, feel free to contact me.</p>
        <hr />
        <div className='publications'>

          {paper1()}
          <hr />
          {paper5()}
          <hr />
          {paper2()}
          <hr />
          {paper3()}
          <hr />
          {paper4()}
          <hr />

        </div>
      </div>
    </div>
  );
};

export default Publications;