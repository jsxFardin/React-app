import React, { useState }  from 'react';

function HookCounterTow(props) {
    const initCount = 0,
        [count, setCount] = useState(initCount);
    return (
        <div>
            Count : {count} <br/>
            <button onClick={() => setCount(initCount)}>Reset</button> <br/>
            <button onClick={() => setCount(pervCount => pervCount + 1)}>Increment</button><br/>
            <button onClick={() => setCount(pervCount => pervCount - 1)}>Decrement</button>
        </div>
    );
}

export default HookCounterTow;