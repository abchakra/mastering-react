import React, { Component } from 'react';


class MovieForm extends Component {
    render() {
        const { match, history } = this.props;
        return (
            <React.Fragment>
                <div>Movie form {match.params.id}</div>
                <button className="btn btn-primary" onClick={() => history.push('/movies')}>Save</button>
            </React.Fragment>
        );
    }
}

export default MovieForm;