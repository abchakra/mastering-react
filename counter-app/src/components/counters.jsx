import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {

        console.log("Counters-rendered")

        const { onReset, onIncrement, onDecrement, onDelete, counters } = this.props;
        return (
            <React.Fragment>


                <button className="btn btn-primary btn-sm" onClick={onReset}>Reset</button>
                {
                    counters.map(
                        counter =>
                            <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} selected />
                    )
                }
            </React.Fragment>
        );
    }
}

export default Counters;