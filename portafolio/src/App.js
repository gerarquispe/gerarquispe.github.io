
import React from 'react';
import Navbar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';
import Home from './home';
import Publications from './components/Publications/publications';
import Experience from './components/Experience/experience';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      
      <Footer />

    </div>
  );
}

export default App;
