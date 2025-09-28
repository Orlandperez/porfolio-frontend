import React from 'react'
import '../styles/home.css'
import '../styles/estrellas.css'
import foto2 from '../assets/foto2.jpg'

function Home() {
  return (
    <>
    <section className='hero' id='home'>
      <div className='hero-text'>
        <span>Hola, soy Orlando</span>
        <h1>Desarrollador FrontEnd <br /> Junior.</h1>
        <p>Apasionado por desarrollar sitio web que impacten positivamente al usuario final</p>
        <a href="https://drive.google.com/file/d/1pApUzoka9Hk2Sx55f8RaJLG9t7ORaAsS/view?usp=sharing" target='_blank'>Ver CV</a>
      </div>
      <div className='hero-img'>
        <img src={foto2} alt="" />
      </div>

        {/* Estrellas */}
        <div class="fondo">
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
          <span class="estrellas"></span>
        </div>
      </section>
    </>
  )
}

export default Home