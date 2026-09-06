import React from 'react';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Presentations from './components/Skills/presentations';

const Home = () => {
  return (
    <>
        <Intro />
        <Skills />
        <Works />
        <Presentations />
        <Contact />
    </>
  );
};

export default Home;