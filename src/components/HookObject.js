import React, { useState } from 'react';

function HookObject(props) {
    const obj = {
        firstName: '',
        lastName: ''
    };
    const [name, setName] = useState(obj);
    return (
        <form>
            <br/><br/>
            <input type="text"
                value={name.firstName}
                onChange={(e)=> setName({...name, firstName : e.target.value})}/><br/><br/>
            <input type="text"
                value={name.lastName}
                onChange={(e)=> setName({...name, lastName : e.target.value})}/><br/><br/>
            <h1>First Name is : {name.firstName}</h1>
            <h1>Last Name is : {name.lastName}</h1>
        </form>
    );
}

export default HookObject;