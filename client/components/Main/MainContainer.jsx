import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Video from './Video';
import Summary from './Summary';
import YouTube from 'react-youtube';
// import ReactPlayer from 'react-player';

const mapStateToProps = store => ({
    url: store.video.url,
    title: store.video.title,
    description: store.video.description,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchVideo: actions.fetchVideo,
        setTime: actions.setTime,
    }, dispatch)
}

class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchVideo(`https://www.youtube.com/watch?v=${this.props.url}`);
    }

    componentDidUpdate(){
        this.props.fetchVideo(`https://www.youtube.com/watch?v=${this.props.url}`);        
    }

    // ref (player) {
    //     this.player = player
    // }

    getTime(event) {
        // let ytplayer = (document.querySelector("iframe"));
        console.log();
    }

    render() {
        console.log()
        return (
            <div id = 'main-container'>
                <div id = 'video-container'>
                    {/* <Video url={this.props.url} rep={this.ref} /> */}
                    <YouTube id="hello" videoId={this.props.url} onPlay={this._onReady} playing />
                    {/* <ReactPlayer ref="player" url={`http://www.youtube.com/embed/${this.props.url}?enablejsapi=1&origin=http://example.com`} playing /> */}
                    <button onClick={this.getTime}> click</button>
                </div>
                <div id = 'summary-container'>
                    <Summary title={this.props.title} description={this.props.description} />
                </div>
            </div> 
        )
    }

    _onReady(event) {
        console.log(event.target.getCurrentTime());
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);