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
// import IntervalHookCounter from './components/use-effect/IntervalHookCounter';
// import DataFetch from './components/use-effect/DataFetch';
// import CompoentC from './components/context/CompoentC';
import Counter from './components/reducer/Counter';

// export const UserContext = React.createContext();
// export const ChanelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'fardin'}>

        <ChanelContext.Provider value={'encoder'}>
          <CompoentC/>
        </ChanelContext.Provider>

      </UserContext.Provider> */}

      <Counter/>


    </div>
  );
}

export default App;
