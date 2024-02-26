// @ts-check

import React, { useState } from 'react';
import './App.css';
import HowToUse from './HowToUse';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import ResultContainerPlugin from './ResultContainerPlugin';

const App = (props) => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults(prev => [...prev, decodedResult]);
  };

  return (
    <div className="App">
      <section className="App-section">
        <div className="App-section-title">qrcode  demo</div>
        <br />
        <br />
        <br />
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        <div className="buttion-claas">
          <button>Open Link</button>
          <button>Open website</button>
        </div>
        <ResultContainerPlugin results={decodedResults} />
        <HowToUse />
      </section>
    </div>
  );
};

export default App;
