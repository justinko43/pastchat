import * as types from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    url: 'Q5Am4Xc1axA',
    title: 'first title',
    description: 'first description',
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
        default:
            return state;
    }
}

export default videoReducer;