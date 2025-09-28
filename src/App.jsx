import React from 'react'

// Imports: "Pages" and "components"
import Home from './pages/Home.jsx';
import About from './pages/AboutMe.jsx';
import Proyects from './pages/Proyects.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Styles
import './App.css'

function App() {
  return (
    <>
      <Header />
       
      <Home />
      <About />
      <Proyects />
      <Contact />
  
      <Footer />
    </>
  )
}

export default App
