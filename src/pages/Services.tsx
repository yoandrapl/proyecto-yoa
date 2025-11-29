import React from 'react'

const Services: React.FC = () => {
  return (
    <div className="services container">
      <h2>Servicios</h2>
      <div className="services-grid">
        <div className="service">
          <h3>Chapa</h3>
          <p>Reparación de abolladuras, sustitución y alineado de piezas.</p>
        </div>
        <div className="service">
          <h3>Pintura</h3>
          <p>Repintado, retoque puntual y pintado integral con garantías.</p>
        </div>
        <div className="service">
          <h3>Restauración</h3>
          <p>Recuperación de elementos deteriorados y restauración estética.</p>
        </div>
        <div className="service">
          <h3>Pulido &amp; Detailing</h3>
          <p>Eliminación de marcas, pulidos y tratamiento protector del acabado.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
