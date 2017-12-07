import * as types from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    url: 'Q5Am4Xc1axA',
    title: 'first title',
    description: 'first description',
    time: 0,
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_VIDINFO:
            return Object.assign({}, state, {
                isFetching: false,
            });
        case types.RECEIVE_VIDINFO:
            return Object.assign({}, state, {
                isFetching: false,
                title: action.title,
                description: action.description,
            });
        case types.SET_LINK:
            return Object.assign({}, state, {
                url: action.link,
            });
        case types.SET_TIME:
            return Object.assign({}, state, {
                time: Math.floor(action.time.playedSeconds) * 1000,
            })
        default:
            return state;
    }
}

export default videoReducer;