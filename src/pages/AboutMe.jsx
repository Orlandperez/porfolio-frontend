import React from 'react'
import '../styles/AboutMe.css'
import Skills from '../components/Skills.jsx'

function AboutMe() {
  return (
    <>
    <section className='aboutMe' id='aboutMe'>
      <div className='about-container'>
        <h1>Sobre Mi</h1>
        <span className='linea1'></span>
        <div className='about-info'> 
          <div>
            <h3><i className="bi bi-person-circle"></i> Quien Soy?</h3>
            <p>Soy alguien que disfruta tanto del código como de los videojuegos. Me gusta pensar en cómo mejorar la experiencia del usuario desde el diseño hasta la funcionalidad. Siempre estoy buscando aprender algo nuevo y aplicar lo que sé en proyectos reales.</p>
          </div>
          <div>
            <h3><i className="bi bi-rocket-takeoff-fill"></i> Mi Objetivo</h3>
            <p>Mi objetivo es seguir creciendo como desarrollador, perfeccionando mis habilidades en React, Node.js y MongoDB. Quiero trabajar en proyectos que desafíen mi creatividad y lógica, mientras construyo una carrera sólida y profesional.</p>
          </div>
          <div>
            <h3><i className="bi bi-stars"></i> Mi Perfil</h3>
            <p>Tengo experiencia en HTML5, CSS3, JavaScript y React.js, y estoy ampliando mis conocimientos en backend con Node.js y MongoDB. Me destaco por ser organizado, comunicativo y comprometido con la mejora continua. Me gusta trabajar en equipo, pero también soy autónomo y resolutivo.</p>
          </div>
        </div>

        <Skills />
      </div>
    </section>
    </>
  )
}

export default AboutMe