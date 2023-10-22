import { useState } from 'react';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  let [data, setData] = useState({});
  let [requestParams, setRequestParams] = useState({ url: '', method: '' });

  const callApi = ( reqData ) => {
    const { params, data } = reqData;
 
    setData(data);
  }

  

  return (
    <>
      <Header />
      <div>Request Method: { requestParams.method }</div>
      <div>URL: { requestParams.url }</div>
      <Form updateReqParams={ setRequestParams } />
      <Results data={ data } />
      <Footer />
    </>
  );
}

export default App;
