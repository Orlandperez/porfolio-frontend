import React from 'react'
import ProjectsList from '../components/ProjectsList'
import '../styles/Projects.css'

function Projects() {
  return (
    <>
    <section className="projects" id="projects">
      <div className='projects-conteiner'>
        <h2>Proyectos</h2>
        <span></span>
        <div className="projects-list">
          <ProjectsList />
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects