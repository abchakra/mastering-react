import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService"
import Like from './like';
import Pagination from './pagination';
import { paginate } from "../utils/paginate"
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './listGroup';
class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: null
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
        this.setState({ currentPage: page });
    }
    handleGenreSelect = genre => {
        // console.log(genre)
        this.setState({ selectedGenre: genre });
    }
    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: getGenres()
        })
    }
    render() {
        const { length: movieCount } = this.state.movies;

        const { pageSize, currentPage, movies: allMovies, genres, selectedGenre } = this.state;

        if (movieCount === 0) {
            return <p>There are no movies in the database</p>
        } else {
            const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
            const movies = paginate(filtered, currentPage, pageSize);
            return (
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            items={genres}
                            selectedItem={selectedGenre}
                            onItemSelect={this.handleGenreSelect} />
                    </div>
                    <div className="col">
                        <p>Showing {filtered.length} movies in the database.</p>
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
                                    movies.map(movie => (
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
                            currentPage={currentPage}
                            itemsCount={filtered.length}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default Movies;