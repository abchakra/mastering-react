import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("Counter-didupdate")

        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {

        console.log("Counter-unmount")
    }
    render() {
        console.log("Counter-rendered")
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm">+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? true : false}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm">X</button>
                </div>



            </div>
        );
    }

    getBadgeClasses() {
        let classes = "col-sm badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;