import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 
import './QRPage.css'; 

const QRPage = () => {
  const [qrValue, setQrValue] = useState(generateRandomCode());

  // Función para generar un código aleatorio
  function generateRandomCode() {
    return Math.random().toString(36).substr(2, 8);
  }

  // El código QR cada 30 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setQrValue(generateRandomCode());
    }, 30000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte el componente
  }, []);

  return (
    <div className="qr-page"> {/*clase css .qr-page */}
      <div className="qr-container">
        <h1 className="qr-heading">Código QR | Registrar Asistencia</h1>
        <div className="qr-code-container">
          <QRCodeCanvas value={qrValue} size={200} /> {/* Genera el código QR */}
        </div>
    
      </div>
    </div>
  );
};

export default QRPage;
