import React from "react";
import './intro.css';
import bg from '../../assets/profil-gerar-photo-v4.png';
import btnImg from '../../assets/hireme.png';

import { FaGraduationCap , FaCode  } from "react-icons/fa";

import ParticlesComponent from "../particles";

const Intro = () => {
    return (
        <section id="intro" >
            <ParticlesComponent id='particles'/>
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName"> Gerar Francis </span> <br /> Master in Computer Science </span>
                <p className="introPara">
                    <FaGraduationCap  style={{ marginRight: '16px', color: '#00ADB5', fontSize: '27px' }} /> 
                    I am a skilled programer builder with experience <br />  
                    in creating visually appealing and user friendly websites.</p>

                <p className="introPara"> 
                    <FaCode  style={{ marginRight: '16px', color: '#00ADB5', fontSize: '25px' }} /> 
                    I work with topics related to Web Developer, Machine <br /> 
                    Learning, large-scale data processing and computer vision.</p>

                <a href="https://www.linkedin.com/in/gfquispe/" target="_blank" rel="noopener noreferrer">
                    <button className="btn" >
                            <img src={btnImg} alt="Hire" className='btnImg' />
                            Hire Me
                    </button>
                </a>
            </div>
            <img src={bg} alt="Profile" className="backgroundImg" />
        </section>
    )
}

export default Intro;