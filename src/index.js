import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = ( state = {}, action ) => {

    switch( action.type ) {
        case 'SET_FEELINGS':
            return [state, action.payload]
        case 'SET_UNDERSTANDING':
            return [state, action.payload]
        case 'SET_SUPPORTED':
            return [state, action.payload]
        case 'SET_COMMENTS':
            return [state, action.payload]
    } // end switch
    return state
} // end feedbackReducer

const store = createStore(

    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(
        logger
    )

); // end createStore

ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>,

document.getElementById('root')

);

registerServiceWorker();
