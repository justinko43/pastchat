import * as types from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    comments: [123,123,123],
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RECEIVE_COMMENTS:
            return Object.assign({}, state, {
                isFetching: false,
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