import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
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
        <section id="sobre">
          <About />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Taller YOA — Chapa y Pintura</p>
          <p>Dirección: C/ Ejemplo 123, 28000 Madrid · Tel: <a href="tel:+34600111222">600 111 222</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
