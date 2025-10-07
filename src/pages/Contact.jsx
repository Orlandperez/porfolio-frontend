import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/Contact.css'

function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const enviar = async (data) => {
  try {
    const response = await fetch('https://formspree.io/f/xnnndroz', { // Reemplaza {tu_id}
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      setMensajeEnviado(true)
      reset()
    } else {
      alert('Error al enviar el mensaje');
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
  }
};

  return (
    <section className='contact' id='contact'>
      <h2>Trabajemos Juntos</h2>
      <div className='contact-container'>
        <div className='contact-info'>
          <p>Me gusta crear experiencias web que se sientan fluidas, estéticas y bien pensadas. Si tenés un proyecto, una idea o simplemente querés charlar sobre cómo llevarlo al siguiente nivel, escribime. Estoy listo para codear, diseñar y aportar desde lo técnico y lo visual.</p>
          <div>
            <a href="https://www.linkedin.com/in/orlando-perez-09270a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/Orlandperez" target="_blank"><i className="bi bi-github"></i></a>
            <a href="https://wa.me/qr/4OSX3L7UPFXBJ1 " target="_blank"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/orlando_perez_2003?igsh=YXVwcGhjNnR6ZzRi" target="_blank"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
        {mensajeEnviado ? (
          <div className="contact-form">
            <div className="icono-exito">
              <i className="bi bi-check-circle" style={{ fontSize: '3rem', color: '#2ec4b6' }}></i>
            </div>
            <h3>¡Mensaje Enviado!</h3>
            <p style={{margin: "5px 0 0 0"}}>Gracias por contactarme. Te responderé lo antes posible.</p>
            <button onClick={() => setMensajeEnviado(false)}>Enviar otro mensaje</button>
          </div>
        ) : (
          <form className='contact-form' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingresa tu nombre' required {...register("nombre")} />
            <input type="email" placeholder='Ingresa tu email' required {...register("email")} />
            <textarea placeholder='Escribe tu mensaje' required {...register("mensaje")}></textarea>
            <button type='submit'>Enviar</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact