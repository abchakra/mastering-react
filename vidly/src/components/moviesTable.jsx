import React, { Component } from 'react';
import Like from './like';
class MoviesTable extends Component {
    state = {}

    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    }
    render() {
        const { movies, onDelete, onLike } = this.props;
        return (<table className="table">

            <thead>
                <tr>
                    <th scope="col" onClick={() => this.raiseSort("title")}>Title</th>
                    <th scope="col" onClick={() => this.raiseSort("movie.genre.name")}>Genre</th>
                    <th scope="col" onClick={() => this.raiseSort("movie.numberInStock")} > Stock</th>
                    <th scope="col" onClick={() => this.raiseSort("movie.dailyRentalRate")}> Rate</th>
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
                            <td> <Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
                            <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
            </tbody>
        </table>);
    }
}
export default MoviesTable;