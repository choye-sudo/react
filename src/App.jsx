import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// component (jsx)
function App() {
  const [state, setState] = useState({color : "red", name : ""});
  const onChangeHandler = (e) =>{
    setState(e.target.value)
  }

  return (
    <div className="App">
      <input 
        type='color'
        onChange={onChangeHandler} />
      <div
        style={{
          width: '100px', 
          height: '100px',
          backgroundColor: state.color}} />
      <input name = "name" onChange={onChangeHandler} value={state.name}></input>
    </div>
  );
}

export default App;