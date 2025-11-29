import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import VideoSection from './components/VideoSection'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <section id="inicio">
          <Home />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="video">
          <VideoSection />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Taller WE ARE LEMANS S.L. — Chapa y Pintura</p>
          <p>Dirección: Calle Avenida de la Luz 2, 28860, Paracuellos de Jarama Madrid · Tel: <a href="tel:+34916584937">916 58 49 37</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
