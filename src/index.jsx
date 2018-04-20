'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import makeStore from './utils/makeStore.js';

import App from './components/App.jsx';

const store = makeStore();

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

render(<AppWrapper/>, document.getElementById('app'));
