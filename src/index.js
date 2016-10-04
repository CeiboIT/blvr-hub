import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import createLogger from 'redux-logger';

import getRoutes from './config/routes';
const logger = createLogger();

require("./index.css");

const store = createStore(
    combineReducers({...reducers, routing: routerReducer}),
    compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        {getRoutes(history)}
    </Provider>,
document.getElementById('root'));