import React, { Component } from 'react'

export default class Stepper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0
        }
    }

    increment = () => {
        this.setState({
            inputValue: this.state.inputValue + 1
        });
        //something
    }

    decrement = () => {
        this.setState(
            {
                inputValue: this.state.inputValue - 1
            });
        //something
    }



    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <input type="text" value={this.state.inputValue}></input>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
