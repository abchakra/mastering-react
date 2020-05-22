import React from 'react';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

function App() {
  return (

    <React.Fragment>
      <NavBar />
      <main className="container">

        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>

      </main >
    </React.Fragment>

  );
}

export default App;
