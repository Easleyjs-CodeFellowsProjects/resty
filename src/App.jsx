import { useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  // need to replace this w/ reducer stuff
  //let [resultsData, setResultsData] = useState({});

  let initialState = {
    url: '',
    method: '',
    data: null
  }

  const reqReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_URL':
        state.url = action.payload;
      case 'ADD_METHOD':
        state.method = action.payload; //might need to do a return after this. or break. not sure.
      case 'ADD_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }

  const [ state, dispatch ] = useReducer(reqReducer, initialState);

  useEffect(() => {
    const { url, method } = state;

    if ( method && url ) {
      axios[method](url).then((results) => {
        dispatch({
          type: 'ADD_DATA',
          payload: results.data
        })
      })      
    }
  }, [state.url, state.method]);


  return (
    <>
      <Header />
      <div>Request Method: { state.method }</div>
      <div>URL: { state.url }</div>
      <Form dispatchReqParams={ dispatch } />
      <Results data={ state.data } />
      <Footer />
    </>
  );
}

export default App;
