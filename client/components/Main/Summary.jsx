import React, { Component } from 'react';
import { render } from 'react-dom';


class Summary extends Component {
    render() {
        return (
            <div>
                <p className="margin-0">{this.props.title}</p>
                <p>{this.props.description}</p>
            </div> 
        )
    }
}

export default Summary;