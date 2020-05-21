import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: this.props.counter,
    }




    render() {
        // console.log(this.props)
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.props.onIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;