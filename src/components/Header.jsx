import React, { useState } from 'react';
import '../styles/Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <header>
      <h1> <span>Dev</span> Orlando</h1>
      <nav className={menuOpen ? 'mobile-menu' : ''}>
        <a href="#home">Inicio</a>
        <a href="#aboutMe">Sobre Mi</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
      <div className='header-links'>
        <a href="https://www.linkedin.com/in/orlando-perez-09270a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target="_blank"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/Orlandperez" target="_blank"><i className="bi bi-github"></i></a>
        <a href="https://wa.me/qr/4OSX3L7UPFXBJ1 " target="_blank"><i className="bi bi-whatsapp"></i></a>
      </div>

      {/* Menu Hamburguesa */}
      <div className='menu-icon' onClick={handleMenuClick}>
        <i className="bi bi-list"></i>
      </div>
    </header>
    </>
  )
}

export default Header