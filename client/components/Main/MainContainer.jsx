import React, { Component } from 'react';
import { render } from 'react-dom';
import Video from './Video';
import Summary from './Summary';


class MainContainer extends Component {
    render() {
        return (
            <div id='main-container'>
                <div className='margin-top-xl'>
                    <Video/>
                </div>
                <div className='text-gr3'>
                    <Summary/>
                </div>
            </div> 
        )
    }
}

export default MainContainer;