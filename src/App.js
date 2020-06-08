import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import About from './components/About'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      {/* <Name/> */}
      <About title="Web developer"/>
      <Hello name="Fardin">
        <span>Software Developer</span>
      </Hello>
    </div>
  );
}

export default App;
