// @ts-check
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import HowToUse from './HowToUse';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import ResultContainerPlugin from './ResultContainerPlugin';

// Function to make the API call
const fetchData = async (barcode) => {
  if(!barcode) { return ''; }
  try {
    // Construct the URL with the dynamic parameter
    const url = `https://a21zuiw68h.execute-api.eu-north-1.amazonaws.com/dev/api/barcode/${barcode}`;

    // Make the GET request using Axios
    const response = await axios.get(url);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    // throw error; // Rethrow the error to be handled by the caller
    return {};
  }
};
const App = (props) => {
  const [decodedResults, setDecodedResults] = useState([]);
  const [decodedDataResults, setDecodedDataResults] = useState({});
  const onNewScanResult = async (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult.decodedText);
    const data = await fetchData(decodedResult?.decodedText);
    setDecodedDataResults(data);
    setDecodedResults(prev => [...prev, decodedResult]);
  };

  return (
    <div className="App">
      <section className="App-section">
        <div className="App-section-title">Scan Qrcode</div>
        <br />
        <br />
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        <div className="buttion-claas">
          <button>Deduct price</button>
          {/*<button>Open website</button>*/}
        </div>
        <ResultContainerPlugin results={decodedResults} decodedDataResults={decodedDataResults} />
        {/*<HowToUse />*/}
      </section>
    </div>
  );
};

export default App;
