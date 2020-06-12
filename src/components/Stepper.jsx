import React, { Component } from 'react'

export default class Stepper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0
        }
    }

    onChange = (event) => {
        const newValue = Number.parseInt(event.target.value);
        console.log(newValue)
        this.setState( {inputValue: newValue});
        if (isNaN(newValue)) {
            this.setState(
                { inputValue: 0 }
            );
        }
    }

    increment = () => {
        this.setState({
            inputValue: this.state.inputValue + 1
        });
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
                <button background-color="red" onClick={this.decrement}>-</button>
                <input type="input" value={this.state.inputValue} onChange={this.onChange}/>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
