import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="contact container">
      <h2>Contacto</h2>
      <div className="contact-grid">
        <div>
          <div className="info">
            <p><strong>Teléfono:</strong> <a href="tel:+34916584937">916 58 49 37</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@talleryoa.com">info@talleryoa.com</a></p>
            <p><strong>Dirección:</strong> Calle Principal 123, 28000 Madrid</p>
            <p><strong>Horario:</strong> Lun-Vie 9:00 - 18:00 · Sab 10:00 - 14:00</p>
          </div>
        </div>

        <div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Formulario demo: envíe un email a info@talleryoa.com') }}>
            <input placeholder="Nombre" required />
            <input placeholder="Teléfono o email" required />
            <textarea placeholder="Descripción del daño / mensaje" rows={4} required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
