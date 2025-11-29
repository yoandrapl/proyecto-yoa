import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="contact container">
      <h2>Contacto</h2>
      <div className="contact-grid">
        <div>
          <div className="info">
            <p><strong>Teléfono:</strong> <a href="tel:+34916584937">916 58 49 37</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@talleryoa.com">info@lemans88.eu</a></p>
            <p><strong>Dirección:</strong> Calle Avenida de la Luz 2, 28860, Paracuellos de Jarama, Madrid</p>
            <p><strong>Horario:</strong> Lun-Vie 7:00 - 15:00</p>
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
