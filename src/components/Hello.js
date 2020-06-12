import React from 'react';

const Hello = props => {

    // console.log(props);
return (
    <div>
        <h3>Hello {props.name} !</h3>
        You are awesome {props.children}
    </div>
);
}

export default Hello;