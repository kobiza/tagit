'use strict';

import * as actionTypes from './actionTypes';

export const updateName = (name) => {
    return {
        type: actionTypes.UPDATE_NAME,
        name
    };
};