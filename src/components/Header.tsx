import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="site-header container">
      <a className="brand" href="#inicio">
        <img src="/LOGOLEMANS.JPG" alt="Taller YOA" />
        <div>
          <div className="title">TALLER WE ARE LEMANS S.L.</div>
          <div style={{fontSize:12,color:'#94a3b8'}}>Chapa y pintura</div>
        </div>
      </a>
      <nav className="site-nav">
        <a href="#inicio">INICIO</a>
        <a href="#servicios">SERVICIOS</a>
        <a href="#sobre">SOBRE</a>
        <a href="#contacto">CONTACTO</a>
      </nav>
      <a className="cta-phone" href="tel:+34600111222">📞 916 58 49 37</a>
    </header>
  )
}

export default Header
