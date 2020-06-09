import React from 'react';
import './App.css';
// import Name from './components/Name';
// import About from './components/About'
// import Hello from './components/Hello';
import HookCounter from './components/HookCounter'

function App() {
  return (
    <div className="App">
      {/* <Name/>
      <About title="Web developer"/>
      <Hello name="Fardin">
        <span>Software Developer</span>
      </Hello> */}
      <HookCounter/>
    </div>
  );
}

export default App;
