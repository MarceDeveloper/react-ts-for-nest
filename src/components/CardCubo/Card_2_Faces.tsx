import React from 'react';
import './Card_2_Faces.css'; // Importar el archivo CSS con las animaciones y estilos

export const Card_2_Faces: React.FC = () => {
  return (
    <div className="product-card-container flex items-center justify-center h-screen">
      <div className="product-card">
        <div className="card-face card-front flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Producto XYZ</h2>
          <p className="text-lg">Descripción breve</p>
        </div>
        <div className="card-face card-back flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Más Información</h2>
          <p className="text-lg">Detalles adicionales sobre el producto.</p>
        </div>
      </div>
    </div>
  );
};
