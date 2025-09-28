import React from 'react'
import ProyectsList from '../components/ProyectsList'
import '../styles/proyects.css'

function Proyects() {
  return (
    <>
    <section className="projects" id="projects">
      <div className='projects-conteiner'>
        <h2>Proyectos</h2>
        <span></span>
        <div className="projects-list">
          <ProyectsList />
        </div>
      </div>
    </section>
    </>
  )
}

export default Proyects