import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
    }


    handleIncrement = () => {

        this.setState(
            {
                value: this.state.value + 1
            }
        );
    }

    doHandleIncrement = () => {
        this.handleIncrement()
    }

    render() {

        console.log("props", this.props)
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;