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

    handleIncrement = (counterId) => {

        const counter = this.state.counters.filter(c => c.id === counterId);
        counter.value = counter.value + 1;

    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });

    }


    render() {
        return (
            <React.Fragment>
                {
                    this.state.counters.map(counter =>
                        <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete} selected />
                    )}
            </React.Fragment>
        );
    }
}

export default Counters;