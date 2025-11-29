import React from 'react'

const Services: React.FC = () => {
  return (
    <div className="services container">
      <h2>Servicios</h2>
      <div className="services-grid" style={{display:'contents'}}>
        <div className="service">
          <h3>🛠️ Chapa</h3>
          <p>Reparación de abolladuras, sustitución y alineado de piezas con precisión.</p>
        </div>
        <div className="service">
          <h3>🎨 Pintura</h3>
          <p>Repintado, retoque puntual y pintado integral con control de color.</p>
        </div>
        <div className="service">
          <h3>🔧 Restauración</h3>
          <p>Recuperación de elementos y restauración estética para vehículos clásicos.</p>
        </div>
        <div className="service">
          <h3>✨ Pulido & Detailing</h3>
          <p>Pulidos, eliminación de swirls y protección cerámica o selladores.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
