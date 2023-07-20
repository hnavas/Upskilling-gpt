// AQUÍ VA TU COMPONENTE
// ¡No olvides exportarlo!
import React, { useState } from 'react';
import './RandomColor.css';

const ColorChangeApp = () => {
  const [bgColor, setBgColor] = useState('#f9f9f9'); // Estado para controlar el color del rectángulo grande

  const colors = ['#f9f9f9', '#ff0000', '#00ff00', '#0000ff', '#ffa500', '#800080'];

  const changeColor = () => {
    // Función para cambiar el color del rectángulo grande
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
      <div className="rectangle-large" style={{ backgroundColor: bgColor }}>
        <div className="rectangle-small">
          <h2>Hendri | Change Color app</h2>
          <button onClick={changeColor}>CHANGE THE COLOR</button>
        </div>
      </div>
  );
};

export default ColorChangeApp;
