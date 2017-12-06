import { createStore, applyMiddleware, combineReducers } from 'redux';
import chatReducer from './reducers/chatReducer';
import recentReducer from './reducers/recentReducer';
import videoReducer from './reducers/videoReducer';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';

const rootReducer = combineReducers({
    chat: chatReducer,
    recent: recentReducer,
    video: videoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;