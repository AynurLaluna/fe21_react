import React, { useContext } from 'react';
import './App.css';
import { CountContext } from './CountContext';

function App() {
const {counter, setCounter} = useContext(CountContext);

return(
<div className='app'>
  <h1>Counter App</h1>
<button onClick={() => setCounter((prevCounter) => prevCounter - 1)} >-</button>
<h1>{counter}</h1>
<button onClick={() => setCounter((prevCounter) => prevCounter + 1)} >+</button>

</div>
);
}

export default App;
