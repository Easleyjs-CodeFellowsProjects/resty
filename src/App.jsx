import { useState, useEffect } from 'react';
import { axios } from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  let [resultsData, setResultsData] = useState({});
  let [requestParams, setRequestParams] = useState({ url: '', method: '' });

  useEffect(() => {
    const callApi = async () => {
      const results = await axios[requestParams.method](requestParams.url);
      setResultsData(results);
    }
    callApi();
  }, [requestParams])

  return (
    <>
      <Header />
      <div>Request Method: { requestParams.method }</div>
      <div>URL: { requestParams.url }</div>
      <Form updateReqParams={ setRequestParams } />
      <Results data={ resultsData } />
      <Footer />
    </>
  );
}

export default App;
