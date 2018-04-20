'use strict';

require('./helloWorld.scss');

import React from 'react';
import { connect } from 'react-redux';
import {updateName} from '../actions/actionCreators.js'

function mapStateToProps(state) {
    return {
        name: state.name
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (newName) => dispatch(updateName(newName))
    };
};

class HelloWorld extends React.Component {

    constructor(props) {
        super(props);

        this.updateName = (e) => {
            this.props.updateName(e.target.value);
        }
    }

    render() {
        return (
            <div className="hello-world">
                <h2>Hello world</h2>
                <p>
                    Hi there, {this.props.name}
                </p>

                <input type="text" onChange={this.updateName} value={this.props.name}/>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
