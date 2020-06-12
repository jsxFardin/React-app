import React, { useState } from 'react';

function HookArray(props) {
    
    const [items, setItems] = useState([]);

    const addNumber = () => {
        setItems([...items,{
            id: items.length,
            vlaue: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addNumber}>add a number</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.vlaue}</li>
                ))}
            </ul>
        </div>
    );
}

export default HookArray;

