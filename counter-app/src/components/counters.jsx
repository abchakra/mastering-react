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

    handleIncrement = (counter) => {

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        console.log(counters)
        this.setState({ counters })

        // counter.value = counter.value + 1;

    }

    handleDelete = counter => {
        const counters = this.state.counters.filter(c => c.id !== counter.id);
        this.setState({ counters });

    }

    handleReset = () => {
        const counters = [...this.state.counters];
        counters.map(c => c.value = 0);
        this.setState({ counters })
    }


    render() {
        return (
            <React.Fragment>


                <button className="btn btn-primary btn-sm" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete} selected />
                )
                }
            </React.Fragment>
        );
    }
}

export default Counters;