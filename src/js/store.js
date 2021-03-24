import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


const intialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    intialState , 
    applyMiddleware(...middleware)
    );

export default store;       