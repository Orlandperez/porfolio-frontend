import React from 'react'
import '../styles/Footer.css'
function Footer() {
  return (
    <>
    <footer>
      <div className='footer-conteiner'>
        <div className='footer-nav'>
          <a href="#home">Inicio</a>
          <a href="#aboutMe">Sobre Mi</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
        <div className='footer-redes'>
          <a href="https://www.linkedin.com/in/orlando-perez-09270a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/Orlandperez"target="_blank"><i className="bi bi-github"></i></a>
          <a href="https://wa.me/qr/4OSX3L7UPFXBJ1 " target="_blank"><i className="bi bi-whatsapp"></i></a>
          <a href="https://www.tiktok.com/@0rlando.003?is_from_webapp=1&sender_device=pc"target="_blank"><i className="bi bi-tiktok"></i></a>
        </div>
        <p>© 2025 Mi sitio web. Todos los derechos reservados.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer