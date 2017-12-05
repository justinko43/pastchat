import React, { Component } from 'react';
import { render } from 'react-dom';
import Video from './Video';
import Summary from './Summary';


class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Video/>
                </div>
                <div>
                    <Summary/>
                </div>
            </div> 
        )
    }
}

export default Main;