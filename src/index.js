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

        case 'SET_FEELING':
            return {...state, feeling: action.payload}
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload}
        case 'SET_SUPPORT':
            return {...state, support: action.payload}
        case 'SET_COMMENTS':
            return {...state, comments: action.payload}

    } // end switch

    return state;

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
