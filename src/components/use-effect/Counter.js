import React, { useState, useEffect } from "react";


function Counter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('sdfsdf');
        document.title = `You clicked ${count} times`;
    }, [count])

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <input type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>

            <button onClick={() => setCount(count+1)}>count {count}</button>
        </div>
    );
}

export default Counter;