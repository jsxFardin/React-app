import React, { useState, useEffect } from "react";


function HookMouse(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            //  for clearup compoent when unmount
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []) 
    // empty arrary for no conditional dependency
    // only one called.

    return (
        <div>
            <br></br>
            <br></br>
            Hooks X - {x} : Y - {y}
        </div>
    );
}

export default HookMouse;