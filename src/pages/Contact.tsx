import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="contact container">
      <h2>Contacto</h2>
      <div className="info">
        <p><strong>Teléfono:</strong> <a href="tel:+34600111222">600 111 222</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@talleryoa.com">info@talleryoa.com</a></p>
        <p><strong>Dirección:</strong> C/ Ejemplo 123, 28000 Madrid</p>
        <p><strong>Horario:</strong> Lun-Vie 9:00 - 18:00</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); alert('Formulario demo: envíe un email a info@talleryoa.com') }}>
        <input placeholder="Nombre" required />
        <input placeholder="Teléfono o email" required />
        <textarea placeholder="Descripción del daño / mensaje" rows={4} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
