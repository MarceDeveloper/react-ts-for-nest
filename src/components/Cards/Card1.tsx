import React, { useState } from 'react';
import './Card1.css'; // Importar el archivo CSS con las animaciones y estilos

export const Card1: React.FC = () => {
  const [isBackVisible, setIsBackVisible] = useState(false);

  const toggleCard = () => {
    setIsBackVisible(!isBackVisible);
  };

  return (
    <div className="card1-container flex items-center justify-center min-h-screen p-4">
      <div className={`card1 ${isBackVisible ? 'show-back no-hover' : ''}`}>
        <div className="card1-face card1-front">
          <div className="card1-content">
            <img src="https://via.placeholder.com/80" alt="Producto" className="card1-image" />
            <h2 className="card1-title">Producto XYZ</h2>
            <p className="card1-description">Descripción breve del producto.</p>
          </div>
          <div className="card1-shine"></div>
        </div>
        <div className="card1-face card1-back">
          <div className="card1-content">
            <h2 className="card1-title">Más Información</h2>
            <p className="card1-description">Detalles adicionales sobre el producto, como especificaciones, características y beneficios.</p>
          </div>
          <div className="card1-shine"></div>
        </div>
        <button className="card1-toggle" onClick={toggleCard}>
          {isBackVisible ? 'Ver Menos' : 'Ver Más'}
        </button>
      </div>
    </div>
  );
};
