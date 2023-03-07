import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import ChildComponent from './ChildComponent'
const App = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const handleInputChange = (event) => {
    const inputValue = event.target.value
    setInput(inputValue)
    setOutput(inputValue * inputValue)
  }
  return (
    <div id="main">
      <ChildComponent />
      <input id="input" onChange={handleInputChange} />

      <p id="output">{output}</p>
    </div>
  )
}

export default App
