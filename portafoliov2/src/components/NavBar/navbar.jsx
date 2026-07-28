import React, { useState, useEffect, useRef } from "react";
import './navbar.css';
import logo from '../../assets/logo-g.PNG';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

import { Link as ScrollLink } from 'react-scroll';
import * as Scroll from "react-scroll";
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import SchoolIcon from '@mui/icons-material/School';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navMenuRef = useRef(null);
    const mobMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                showMenu &&
                navMenuRef.current &&
                !navMenuRef.current.contains(event.target) &&
                mobMenuRef.current &&
                !mobMenuRef.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [showMenu]);

    const path = useLocation().pathname;
    const location = path.split("/")[1];
    const navigate = useNavigate();
    const scroller = Scroll.scroller;
    const goToPageAndScroll = async (selector, pPage = "") => {
        if (pPage !== "") {
            await navigate(pPage);
        }
        setTimeout(async () => {
            await scroller.scrollTo(selector, {
                activeClass: "active",
                duration: 500,
                smooth: true,
                offset: -75,
                spy: true,
                className: "desktopMenuListItem"
            });
        }
            , 101);
    };

    // bloque 01
    const navbarHome = () => {
        return (
            <ul>
                <li>
                    <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem"><HomeIcon fontSize="small" /> Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem"><PersonIcon fontSize="small" /> About Me</ScrollLink>
                </li>
                <li>
                    <Link to="/publications" className="desktopMenuListItem"><MenuBookIcon fontSize="small" /> Publications</Link>
                </li>
                <li>
                    <Link to="/experience" className="desktopMenuListItem"><BuildIcon fontSize="small" /> Services</Link>
                </li>
                <li>
                    <span className="desktopMenuListItem"><WorkIcon fontSize="small" /> Experience ▼</span>
                    <ul>
                        <li>
                            <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem"><WorkIcon fontSize="small" /> Portfolio</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink activeClass='active' to='clients' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem"><GroupsIcon fontSize="small" /> Clients</ScrollLink>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    };
    // bloque 02
    const navbarNoHome = () => {
        return (
            <ul>
                <li>
                    <ScrollLink className="desktopMenuListItem" onClick={() => goToPageAndScroll("intro", "/")}><HomeIcon fontSize="small" /> Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink className="desktopMenuListItem" onClick={() => goToPageAndScroll("skills", "/")}><PersonIcon fontSize="small" /> About Me</ScrollLink>
                </li>
                <li>
                    <Link to="/publications" className="desktopMenuListItem"><MenuBookIcon fontSize="small" /> Publications</Link>
                </li>
                <li>
                    <Link to="/experience" className="desktopMenuListItem"><BuildIcon fontSize="small" /> Services</Link>
                </li>
                <li>
                    <span className="desktopMenuListItem"><WorkIcon fontSize="small" /> Experience ▼</span>
                    <ul>
                        <li>
                            <ScrollLink className="desktopMenuListItem" onClick={() => goToPageAndScroll("works", "/")}><WorkIcon fontSize="small" /> Portfolio</ScrollLink>

                        </li>
                        <li>
                            <ScrollLink className="desktopMenuListItem" onClick={() => goToPageAndScroll("clients", "/")}><GroupsIcon fontSize="small" /> Clients</ScrollLink>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    };


    return (
        <nav className="navbar">

            <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')} />

            <div className="desktopMenu">
                {location === "" ? navbarHome() : navbarNoHome()}
            </div>            <div className="socialIcons">
                <a href="https://github.com/fryzito" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="large" sx={{ color: "black", "&:hover": { color: "white" } }} />
                </a>
                <a href="https://www.linkedin.com/in/gfquispe/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="large" sx={{ color: "#0a66c2", "&:hover": { color: "white" } }} />
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

            {
                location === "" ? (
                    // In Home
                    <button className="desktopMenuBtn" onClick={() => {
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                    >
                        <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />Contact me
                    </button>
                ) : (
                    // Not in Home
                    <button className="desktopMenuBtn" onClick={() => goToPageAndScroll("contact", "/")}>
                        <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />Contact me
                    </button>
                )
            }


            {/* Menu para mobiles */}
            <img ref={mobMenuRef} src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div ref={navMenuRef} className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                {location === "" ? (
                    <>
                        <ScrollLink activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}><HomeIcon fontSize="small" /> Home</ScrollLink>
                        <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}><PersonIcon fontSize="small" /> About Me</ScrollLink>
                        <Link to="/publications" className="listItem" onClick={() => setShowMenu(false)}><MenuBookIcon fontSize="small" /> Publications</Link>
                        <Link to="/experience" className="listItem" onClick={() => setShowMenu(false)}><BuildIcon fontSize="small" /> Services</Link>
                        <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}><WorkIcon fontSize="small" /> Portfolio</ScrollLink>
                        <ScrollLink activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}><GroupsIcon fontSize="small" /> Clients</ScrollLink>
                        <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}><ContactMailIcon fontSize="small" /> Contact</ScrollLink>
                    </>
                ) : (
                    <>
                        <span className="listItem" onClick={() => { setShowMenu(false); goToPageAndScroll("intro", "/"); }}><HomeIcon fontSize="small" /> Home</span>
                        <span className="listItem" onClick={() => { setShowMenu(false); goToPageAndScroll("skills", "/"); }}><PersonIcon fontSize="small" /> About Me</span>
                        <Link to="/publications" className="listItem" onClick={() => setShowMenu(false)}><MenuBookIcon fontSize="small" /> Publications</Link>
                        <Link to="/experience" className="listItem" onClick={() => setShowMenu(false)}><BuildIcon fontSize="small" /> Services</Link>
                        <span className="listItem" onClick={() => { setShowMenu(false); goToPageAndScroll("works", "/"); }}><WorkIcon fontSize="small" /> Portfolio</span>
                        <span className="listItem" onClick={() => { setShowMenu(false); goToPageAndScroll("clients", "/"); }}><GroupsIcon fontSize="small" /> Clients</span>
                        <span className="listItem" onClick={() => { setShowMenu(false); goToPageAndScroll("contact", "/"); }}><ContactMailIcon fontSize="small" /> Contact</span>
                    </>
                )}
            </div>

        </nav>
    )
}

export default Navbar;