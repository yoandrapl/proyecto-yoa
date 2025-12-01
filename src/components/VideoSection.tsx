import React from 'react'

const VideoSection: React.FC = () => {
  return (
    <div className="video-section container">
      <h2>Mira nuestro trabajo</h2>
      <p className="video-subtitle">
        Conoce cómo transformamos vehículos dañados en obras maestras
      </p>

      <div className="video-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <video 
          controls 
          className="video-iframe"
          style={{ 
            width: '100%', 
            height: 'auto',
            borderRadius: '12px'
          }}
          poster="/lemans.png"
        >
          <source src="/VID-20251201-WA0016.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>

      <div className="video-info">
        <p>
          En este video puedes ver algunos de nuestros trabajos realizados.
          Desde reparaciones de chapa hasta acabados en pintura de máxima calidad.
        </p>
      </div>
    </div>
  )
}

export default VideoSection
