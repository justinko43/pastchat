import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav.jsx';
import Recent from './Recent.jsx';
import Main from './Main.jsx';
import Chat from './Chat.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="nav">
                    <Nav/>
                </div>
                <div id="">
                    <div id="recent">
                        <Recent/>
                    </div>
                    <div id="main">
                        <Main/>
                    </div>
                    <div id="chat">
                        <Chat/>
                    </div>
                </div>
            </div> 
        )
    }
}

export default App;