import React from 'react';
import './App.css';
// import Name from './components/Name';
// import About from './components/About'
// import Hello from './components/Hello';
// import HookCounter from './components/HookCounter';
// import HookCounterTow from './components/HookCounterTow';
// import HookObject from './components/HookObject';
// import Counter from './components/use-effect/Counter';
// import HookMouse from './components/use-effect/HookMouse';
// import MouseContainer from './components/use-effect/MouseContainer';
import IntervalHookCounter from './components/use-effect/IntervalHookCounter';

function App() {
  return (
    <div className="App">
   
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
