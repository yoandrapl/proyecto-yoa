import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="site-header container">
      <a className="brand" href="#inicio">
        <img src="/logobien.png" alt="Taller WE ARE LEMANS" style={{width:120,height:120,objectFit:'contain'}} />
        <div>
          <div className="title" style={{fontSize:22,fontWeight:800}}>TALLER WE ARE LEMANS 2015 S.L.</div>
          <div style={{fontSize:16,color:'#94a3b8'}}>Chapa y pintura</div>
        </div>
      </a>
      <nav className="site-nav">
        <a href="#inicio">INICIO</a>
        <a href="#servicios">SERVICIOS</a>
        <a href="#sobre">SOBRE</a>
        <a href="#contacto">CONTACTO</a>
      </nav>
      <a className="cta-phone" href="tel:+34916584937">📞 916 58 49 37</a>
    </header>
  )
}

export default Header
