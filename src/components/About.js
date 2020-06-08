/**
 * class Compoent 
 */

import React, { Component } from 'react';

class About extends Component {

    render() {
        return <span>{this.props.title}</span>;
    }
}

export default About;