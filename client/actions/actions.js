import * as types from '../constants/actionTypes';
import fetch from 'cross-fetch';

const getComments = (videoLink) => ({
    type: types.GET_COMMENTS,
    videoLink
});

const receiveComments = (videoLink, comments) => ({
    type: types.RECEIVE_COMMENTS,
    link: videoLink,
    comments: comments,
    receivedAt: Date.now(),
})

const fetchComments = (fetchRoute) => {
    return dispatch => {
        dispatch(getComments(fetchRoute))
        return fetch(`/comments/${fetchRoute}`)
            .then(response => response.json())
            .then(json => dispatch(receiveComments(fetchRoute, json)))
    }
}

const postComment = (fetchRoute, message) => {
    fetch(`/post/${fetchRoute}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            timestamp: Date.now(),
            //how to access person's name and avatar?
            name: person.name,
            name: person.avatar,
        }),
    }).then(function(res) { return res.json()});
};

module.exports = {
    fetchComments
};