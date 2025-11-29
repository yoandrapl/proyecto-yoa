import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="hero container">
      <div className="intro">
        <h1>Reparación y pintura de confianza</h1>
        <p>
          En Taller YOA ofrecemos reparación de chapa, pintura y restauración
          para todo tipo de vehículos. Nuestro equipo atiende en toda España
          y ofrece presupuestos sin compromiso.
        </p>
        <div className="cta">
          <a className="btn" href="#contacto">Pedir presupuesto</a>
        </div>
      </div>
      <div>
        <img src="/vite.svg" alt="Taller" style={{width:160,height:120,opacity:.85}} />
      </div>
    </div>
  )
}

export default Home
