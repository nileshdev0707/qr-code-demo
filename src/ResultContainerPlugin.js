import React from 'react';


function filterResults (results) {
  let filteredResults = [];
  for (var i = 0; i < results?.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data }) => {
  const results = filterResults(data);
  return (
    <table className={'Qrcode-result-table'}>
      <thead>
      <tr>
        <td>#</td>
        <td>Decoded Text</td>
        <td>Format</td>
      </tr>
      </thead>
      <tbody>
      {
        results.map((result, i) => {
          console.log(result);
          return (<tr key={i}>
            <td>{i}</td>
            <td>{result.decodedText}</td>
            <td>{result.result.format.formatName}</td>
          </tr>);
        })
      }
      </tbody>
    </table>
  );
};

const ResultContainerPlugin = (props) => {
  const results = filterResults(props.results);
  console.log('Results:', props);
  return (
    <div className='Result-container'>
      {props.decodedDataResults?.price ? <div className='Result-header'>
        <span className="text-h1">Price </span> - {props.decodedDataResults?.price} <br/>
        <span className="text-h1">Daysleft </span> - {props.decodedDataResults?.daysLeft}
      </div> : ""}
      <br/>
      <div className='Result-section'>
        <ResultContainerTable data={results} />
      </div>
    </div>
  );
};

export default ResultContainerPlugin;
