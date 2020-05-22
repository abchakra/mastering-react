import React, { Component } from 'react';


class MovieForm extends Component {
    state = {}
    render() {
        return (<div>Movie form {this.props.movie._id}</div>);
    }
}

export default MovieForm;