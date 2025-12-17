import React from 'react'
import '../styles/Home.css'
import '../styles/Estrellas.css'
import foto from '../assets/foto.png'

function Home() {
  return (
    <>
    <section className='hero' id='home'>
      <div className='hero-text'>
        <span>Hola, soy Orlando</span>
        <h1>Desarrollador FrontEnd <br /> Junior.</h1>
        <p>Apasionado por desarrollar sitio web que impacten positivamente al usuario final</p>
        <a href="https://www.canva.com/design/DAG6XyAU1hs/y9y2_ly0yODKiMRjcUUwDw/view?utm_content=DAG6XyAU1hs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5266d8ef11" target='_blank'>Ver CV</a>
      </div>
      <div className='hero-img'>
        <img src={foto} alt="" />
      </div>

        {/* Estrellas */}
        <div className="fondo">
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
          <span className="estrellas"></span>
        </div>
      </section>
    </>
  )
}

export default Home