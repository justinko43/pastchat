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
              <NavContainer/>
              <div id="flex-container">
                  <RecentContainer  />
                  <MainContainer />
                  <ChatContainer/>
            </div>
            </div> 
        )
    }
}

export default App;