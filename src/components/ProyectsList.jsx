import React from 'react'

function ProyectsList() {

    const projects = [

    ];


    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="projects-card">
                    <img src={project.img} alt={project.name} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div>
                        <a href={project.repositorio} target="_blank" >Repositorio</a>
                        <a href={project.deploy} target="_blank" >Deploy</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProyectsList