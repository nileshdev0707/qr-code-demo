import React, { useState, useEffect } from 'react';
import QrReader from 'html5-qrcode';
import './QRScanner.css'; // You can create a CSS file for styling

const QRScanner = () => {
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    const qrReader = new QrReader(document.getElementById('qr-reader'), { fps: 10 });

    qrReader.render(async (data) => {
      if (data) {
        setScannedData(data);
        qrReader.stop();
      }
    });

    return () => qrReader.stop();
  }, []);

  return (
    <div className="App">
      <div className="qr-scanner-container">
        <h1>QR Code Scanner</h1>
        <div id="qr-reader"></div>
        {scannedData && (
          <div className="scanned-data">
            <p>Scanned Data: {scannedData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
