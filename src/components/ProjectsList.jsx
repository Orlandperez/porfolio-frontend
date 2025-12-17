import React from 'react'
import projec1 from '../assets/projec1.png'
import '../styles/Projects.css'

function ProjectsList() {

    const projects = [
        {
            name: "Portfolio web",
            description: "Sitio web personal que presenta mis proyectos y experiencia en desarrollo frontend",
            technologies: ["React", "CSS", "JavaScript"],
            img: projec1, 
            repositorio: "https://github.com/Orlandperez/porfolio-frontend",
            deploy: "" 
        }
    ];


    return (
        <section className="projects-grid">
            {/* Cards generadas desde el array */}
            {projects.map((project, index) => (
                <article key={index} className="projects-card" data-aos="fade-up" data-aos-delay={index * 80}>
                    <div className="card-media">
                        <img src={project.img} alt={project.name} />
                        <div className="card-overlay">
                            {project.repositorio && (
                                <a href={project.repositorio} target="_blank" rel="noopener noreferrer" className="icon-btn">Repositorio</a>
                            )}
                            {project.deploy && (
                                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="icon-btn">Deploy</a>
                            )}
                        </div>
                    </div>
                    <div className="card-body">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="card-tech">
                            {project.technologies ? (
                                project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))
                            ) : (
                                <span>{project.languages}</span>
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default ProjectsList