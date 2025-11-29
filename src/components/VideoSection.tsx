import React, { useState } from 'react'

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="video-section container">
      <h2>Mira nuestro trabajo</h2>
      <p className="video-subtitle">
        Conoce cómo transformamos vehículos dañados en obras maestras
      </p>

      <div className="video-container">
        {!isPlaying ? (
          <div className="video-placeholder" onClick={() => setIsPlaying(true)}>
            <div className="play-button">▶</div>
            <div className="video-text">Haz clic para reproducir</div>
          </div>
        ) : (
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/cL8W90M2lqs?autoplay=1"
            title="Video del Taller YOA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
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
