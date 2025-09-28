import React from 'react'
import '../styles/AboutMe.css'

function Skills() {
  const skills = [
  { name: 'Html5', icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: 'Css3', icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: 'Javascript', icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: 'React js', icon: "fa-brands fa-react", color: "#61DAFB" },
  { name: 'Node js', icon: "fa-brands fa-node", color: "#339933" },
  { name: 'Git', icon: "fa-brands fa-git-alt", color: "#F05032" },
  { name: 'GitHub', icon: "fa-brands fa-github", color: "#181717" },
  // Agrega más skills aquí
  ];

   return (
    <section className="skills">
    <h3>Mis Habilidades Tecnicas</h3>
    <span className='linea2'></span>
    <div className="skills-list">
      {skills.map(skill => (
        <div className="skill-item" key={skill.name} >
          <i className={skill.icon} style={{ color: skill.color }}></i>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Skills