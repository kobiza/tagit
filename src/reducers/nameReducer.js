'use strict';

import {UPDATE_NAME} from '../actions/actionTypes';

const initialState = 'Kobi';

export default function nameReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_NAME:
            return action.name;
        default:
            return state;
    }
}
