import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {

        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 3 },
            { id: 3, value: 0 },
            { id: 4, value: 8 },
            { id: 5, value: 0 },
            { id: 6, value: 2 },
            { id: 7, value: 0 },
        ]
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


    handleDelete = () => {

        this.setState(
            {
                value: this.state.value - 1
            }
        );
    }

    doHandleDelete = counterId => {
        console.log(counterId)

        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState(counters);

    }


    render() {
        return (
            <React.Fragment>
                {
                    this.state.counters.map(counter =>
                        <Counter key={counter.id} id={counter.id} value={counter.value} onIncrement={this.doHandleIncrement} onDelete={this.doHandleDelete} selected />
                    )}
            </React.Fragment>
        );
    }
}

export default Counters;