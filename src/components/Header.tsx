import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="site-header container">
      <a className="brand" href="#inicio">
        <div className="logo-box">YOA</div>
        <div>
          <div style={{fontWeight:700}}>Taller YOA</div>
          <div style={{fontSize:12,color:'#666'}}>Chapa y pintura</div>
        </div>
      </a>
      <nav className="site-nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#sobre">Sobre nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Header
