'use strict';

import {createStore, combineReducers} from 'redux';

import nameReducer from '../reducers/nameReducer.js';

const makeStore = initialState => {
    const reducers = combineReducers({
        name: nameReducer
    });

    return createStore(reducers, initialState);
};

export default makeStore;
