import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo-g.PNG';
import contactImg from '../../assets/contact.png';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import menu from '../../assets/menu.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">

            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>

            <div className="desktopMenu">
                <ul>
                    <li>
                    <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Home</ScrollLink>
                    </li>
                    <li>
                    <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About Me</ScrollLink>
                    </li>
                    <li>
                        <Link to="/publications" className="desktopMenuListItem">Publications</Link>
                    </li>
                    <li>
                        <Link to="/experience" className="desktopMenuListItem">Experience</Link>
                    </li>
                    <li>
                        <span>Servicios ▼</span>
                        <ul>
                            <li>
                            <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Portfolio</ScrollLink>
                            </li>
                            <li>
                            <ScrollLink activeClass='active' to='clients' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Clients</ScrollLink>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>

            <div >
                <a href="https://github.com/fryzito" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="large" sx={{ color: "black", "&:hover": { color: "white" } }} />
                </a>
                <a href="https://www.linkedin.com/in/gfquispe/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon  fontSize="large" sx={{ color: "#0a66c2", "&:hover": { color: "white" } }} />
                </a>
                <a href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=57168" target="_blank" rel="noopener noreferrer">
                    <ScienceTwoToneIcon fontSize="large" sx={{ color: "#00ADB5", "&:hover": { color: "white" } }} />
                </a>
                <a href="https://scholar.google.com/citations?user=Gd9PwdwAAAAJ&hl=es&oi=sra" target="_blank" rel="noopener noreferrer">
                    <SchoolIcon fontSize="large" sx={{ color: "#00ADB5", "&:hover": { color: "white" } }} />
                </a>
                <a href="https://www.facebook.com/gfquispe" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon fontSize="large" sx={{ color: "#0866ff", "&:hover": { color: "white" } }} />
                </a>

            </div>
            

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}
            >
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact me
            </button>
            


            {/* Menu para mobiles */}
            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</ScrollLink>
                <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</ScrollLink>
                <ScrollLink activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</ScrollLink>
                <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</ScrollLink>
            </div>




        </nav>
    )
}

export default Navbar;