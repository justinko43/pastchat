import React, { Component } from 'react';
import { render } from 'react-dom';
import NavContainer from './Nav/NavContainer';
import RecentContainer from './Recent/RecentContainer';
import MainContainer from './Main/MainContainer';
import ChatContainer from './Chat/ChatContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div id="nav">
                    <NavContainer/>
                </div>
                <div id="">
                    <div id="recent">
                        <RecentContainer/>
                    </div>
                    <div id="main">
                        <MainContainer/>
                    </div>
                    <div id="chat">
                        <ChatContainer/>
                    </div>
                </div>
            </div> 
        )
    }
}

export default App;