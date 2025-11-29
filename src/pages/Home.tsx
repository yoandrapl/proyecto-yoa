import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="hero container">
      <div>
        <h1>Restauramos tu vehículo con perfección</h1>
        <p>
          Especializados en reparación de chapa y pintura con acabados premium.
          Garantía en cada trabajo, presupuestos sin compromiso y atención personalizada.
        </p>
        <div className="actions">
          <a className="btn" href="#contacto">Pedir presupuesto</a>
          <a className="btn secondary" href="#servicios">Ver servicios</a>
        </div>

        <div className="features">
          <div className="feature">
            <div className="dot">✓</div>
            <div>
              <strong>Calidad garantizada</strong>
              <div style={{color:'#667085'}}>Pintura con materiales de primera</div>
            </div>
          </div>
          <div className="feature">
            <div className="dot">⏱</div>
            <div>
              <strong>Entrega rápida</strong>
              <div style={{color:'#667085'}}>Tiempos ajustados y comunicación constante</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="/lemans.png" alt="Ilustración taller" style={{width:'100%',borderRadius:12}} />
      </div>
    </div>
  )
}

export default Home
