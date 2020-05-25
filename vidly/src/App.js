import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/forms/movieForm';
import LoginForm from './components/forms/loginForm';
import Registration from './components/forms/registerationForm';
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/register" component={Registration} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>

      </main >
    </React.Fragment>

  );
}

export default App;
