import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return(
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/home" element=  {<Home />} />
        <Route path="/about" element=  {<About />} />
        <Route path="/contact" element=  {<Contact />} />
      </Routes>
    </div>
    </> 
  )
}

export default App;
