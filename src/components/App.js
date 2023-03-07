import React, { useState } from 'react';
import '../styles/App.css';
import ChildComponent from './ChildComponent';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setOutputValue(inputValue * inputValue);
  }

  return (
    <div id="main">
      <ChildComponent>
        <input id='input' onChange={handleInputChange} />
      </ChildComponent>
      <p id='output'>{outputValue}</p>
    </div>
  );
}

export default App;
