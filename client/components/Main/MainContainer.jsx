import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Video from './Video';
import Summary from './Summary';
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

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

    _onReady(played, loaded) {
        // setInterval(console.log(event.target.getCurrentTime()), 1000);
        // this.setState({timer: setInterval(console.log('hello'), 1000)})
        // setInterval(console.log('hello'), 1000);
        //    console.log(event.target.getCurrentTime()); 
        console.log(played);
        this.props.setTime(played);
    }
    
    render() {    
        console.log(this.props.url);
        return (
            <div id = 'main-container'>
                <div id = 'video-container' className="margin-top-xl">
                    {/* <YouTube id="hello" videoId={this.props.url} onProgress={this._onReady} playing /> */}
                    <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${this.props.url}`} onProgress={this.props.setTime}/>
                    <button onClick={this.getTime}> click</button>
                    <div id="summary-container" className="margin-xl">
                        <Summary title={this.props.title} description={this.props.description} />
                    </div>
                </div>
            </div>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);