import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="site-header container">
      <a className="brand" href="#inicio">
        <img src="/logo.svg" alt="Taller YOA" />
        <div>
          <div className="title">Taller iv>
          <div style={{fontSize:12,color:'#94a3b8'}}>Chapa y pintura</div>
        </div>
      </a>
      <nav className="site-nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#sobre">Sobre</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <a className="cta-phone" href="tel:+34600111222">📞 600 111 222</a>
    </header>
  )
}

export default Header
