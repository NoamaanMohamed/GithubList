import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { SearchForm, Result} from './components';
import { getResult } from './actions';
import '@fontsource/roboto/300.css';


function App() {
  const result = useSelector(state => state.result);
  //const username = useSelector(state => state.username);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error)

  const dispatch = useDispatch();

  const search = searchTerm => dispatch(getResult(searchTerm));

  const renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result} />

  return (
    <div className="App">
      <h1>Please enter your username below</h1>

      <SearchForm getResult={search} />

      {error ? <p aria-label='alert' role='alert'>Oops there's been an error! {error}</p> : renderResult()}

    </div>
  );
}

export default App;
