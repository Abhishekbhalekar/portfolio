
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import React from 'react'
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Project />
    <About />
    <Contact />
    </>

  )
}

export default App
