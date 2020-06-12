import React from 'react';
import './App.css';
// import Name from './components/Name';
// import About from './components/About'
// import Hello from './components/Hello';
// import HookCounter from './components/HookCounter';
// import HookCounterTow from './components/HookCounterTow';
// import HookObject from './components/HookObject';
import HookArray from './components/HookArray';

function App() {
  return (
    <div className="App">
      {/* <Name/>
      <About title="Web developer"/>
      <Hello name="Fardin">
        <span>Software Developer</span>
      </Hello> */}
      <HookArray/>
    </div>
  );
}

export default App;
