import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <React.Fragment>


                <button className="btn btn-primary btn-sm" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id} counter={counter} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} selected />
                )
                }
            </React.Fragment>
        );
    }
}

export default Counters;