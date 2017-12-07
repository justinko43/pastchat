import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch';

const getVidInfo = (videoLink) => ({
    type: types.GET_VIDINFO,
    isFetching: true,
});

const receiveVidInfo = (videoLink, data) => ({
    url: data.url,
    type: types.RECEIVE_VIDINFO,
    title: data.title,
    description: data.thumbnail_url,
    isFetching: false,
});

const getComments = (videoLink) => ({
    type: types.GET_COMMENTS,
    isFetching: true,
});

const receiveComments = (videoLink, comments) => ({
    type: types.RECEIVE_COMMENTS,
    comments: comments,
    receivedAt: Date.now(),
    isFetching: false,
})

const fetchComments = (fetchRoute) => {
    return dispatch => {
        dispatch(getComments(fetchRoute))
        return fetch(`/comments/${fetchRoute}`)
            .then(response => response.json())
            .then(json => dispatch(receiveComments(fetchRoute, json)))
    }
}

const fetchVideo = (videoLink) => {
    return dispatch => {
        dispatch(getVidInfo(videoLink));
        return fetch(`https://noembed.com/embed?url=${videoLink}`)
            .then(response => response.json())
            .then(json => dispatch(receiveVidInfo(videoLink, json)))
    }
}

const setLink = (ytLink) => ({
    type: types.SET_LINK,
    link: ytLink,
});

const setTime = (newTime) => ({
    type: types.SET_TIME,
    time: newTime,
})



module.exports = {
    fetchComments,
    fetchVideo,
    setLink,
    setTime,
};