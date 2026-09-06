
import React from 'react';
import Navbar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';
import Home from './home';
import Publications from './components/Publications/publications';
import Experience from './components/Experience/experience';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/404/NotFound';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
