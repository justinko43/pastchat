import * as types from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    url: '123',
    comments: [123,123,123],
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RECEIVE_COMMENTS:
            return Object.assign({}, state, {
                isFetching: false,
                url: action.link,
                comments: action.comments,
                lastUpdated: action.receivedAt,
            });
        case types.GET_COMMENTS:
            return Object.assign({},state,{
                isFetching: true
            });
        case types.POST_COMMENT:
            return Object.assign({}, state, {
            });
        default:
            return state;
    }
}

export default chatReducer;