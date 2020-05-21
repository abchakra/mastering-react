import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService"
import Like from './like';
import Pagination from './pagination';
class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 3
    }

    handleLiked = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    }
    handleDelete = movie => {

        console.log(movie)

        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        })
    }
    handlePageChange = page => {
        console.log(page)
    }

    render() {
        const { length: movieCount } = this.state.movies;
        if (movieCount === 0) {
            return <p>There are no movies in the database</p>
        } else {
            return (
                <React.Fragment>
                    <p>Showing {movieCount} movies in the database.</p>
                    <table className="table">

                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.movies.map(movie => (
                                    <tr key={movie._id} >
                                        <th scope="row" >{movie.title}</th>
                                        <td >{movie.genre.name}</td>
                                        <td> {movie.numberInStock}</td>
                                        <td> {movie.dailyRentalRate}</td>
                                        <td> <Like liked={movie.liked} onClick={() => this.handleLiked(movie)} /></td>
                                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={movieCount}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePageChange}
                    />
                </React.Fragment>
            );
        }
    }
}

export default Movies;