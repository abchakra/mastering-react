import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService"
import Pagination from './pagination';
import { paginate } from "../utils/paginate"
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc' }
    }

    handleLiked = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    }
    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        })
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    }
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }
    handleSort = sortColumn => {
        this.setState({ sortColumn });

    }
    componentDidMount() {

        const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()]
        this.setState({
            movies: getMovies(),
            genres
        })
    }
    render() {
        const { length: movieCount } = this.state.movies;

        const { pageSize, currentPage, movies: allMovies, genres, selectedGenre, sortColumn } = this.state;

        if (movieCount === 0) {
            return <p>There are no movies in the database</p>
        } else {
            const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

            const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
            const movies = paginate(sorted, currentPage, pageSize);
            return (
                <div className="row">
                    <div className="col-3">
                        <ListGroup
                            items={genres}
                            selectedItem={selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <p>Showing {filtered.length} movies in the database.</p>

                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onLike={this.handleLiked}
                            onSort={this.handleSort}
                        />
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