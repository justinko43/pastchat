import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch';

const getComments = (videoLink) => ({
    type: GET_COMMENTS,
    videoLink
});

const receiveComments = (videoLink, comments) => ({
    type: RECEIVE_COMMENTS,
    link: videoLink,
    comments: comments,
    receivedAt: Date.now(),
})

const fetchComments = (fetchRoute) => {
    return dispatch => {
        dispatch(getComments(fetchRoute))
        return fetch(`/video/Q5Am4Xc1axA`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(fetchRoute, json)))
    }
}

const postComment = () => ({
    
});

module.exports = {
    getComments,
    postComment,
};