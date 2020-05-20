import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService"
class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {

    }

    render() {
        return (<table class="table">

            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                {
                    this.state.movies.map(movie => (
                        <tr >
                            <th scope="row" >{movie.title}</th>
                            <td >{movie.genre.name}</td>
                            <td> {movie.numberInStock}</td>
                            <td> {movie.dailyRentalRate}</td>
                        </tr>
                    ))}
            </tbody>
        </table>);
    }
}

export default Movies;