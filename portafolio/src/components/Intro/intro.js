import React from "react";
import './intro.css';
import bg from '../../assets/profil-gerar-photo-v4.png';
import btnImg from '../../assets/hireme.png';

import ParticlesComponent from "../particles";

const Intro = () => {
    return (
        <section id="intro" >
            <ParticlesComponent id='particles'/>
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName"> Gerar Francis </span> <br /> Master in Computer Science </span>
                <p className="introPara">I am a skilled web page builder with experience in creating <br />visually appealing and user friendly websites.</p>
                <p className="introPara">In addition to that, I work with topics related to Machine Learning, large-scale data processing and computer vision.</p>
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