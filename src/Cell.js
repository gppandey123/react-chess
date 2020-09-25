import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {

   

    render() {
        return (
            <button className="cell" onClick = { () =>this.props.click()}>
                {this.props.value}
            </button>
        )
    }
}
