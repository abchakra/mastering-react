import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

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


  constructor() {
    super();
    console.log("App-Constructor")
  }

  componentDidMount() {
    console.log("App-Mounted")
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
    console.log("App-rendered")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset} />
        </main>
      </React.Fragment >

    );
  }
}

export default App;
