import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatReducer from './reducers/chatReducer';
import recentReducer from './reducers/recentReducer';
import videoReducer from './reducers/videoReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    chat: chatReducer,
    recent: recentReducer,
    video: videoReducer,
})

const store = createStore (rootReducer, applyMiddleware(composeWithDevTools, thunkMiddleware));

export default store;