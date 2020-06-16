import React, { useReducer }  from 'react';

const initState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initState;
        default:
            return state;
    }
}

function Counter(props) { 
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            Count : {count} <br/>
            <button onClick={() => dispatch('reset')}>Reset</button> <br/>
            <button onClick={() => dispatch('increment')}>Increment</button><br/>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    );
}

export default Counter;