import React from 'react';
import Like from './like';

const MoviesTable = (props) => {
    const { movies, onDelete, onLike, onSort } = props;
    return (<table className="table">

        <thead>
            <tr>
                <th scope="col" onClick={() => onSort("title")}>Title</th>
                <th scope="col" onClick={() => onSort("movie.genre.name")}>Genre</th>
                <th scope="col" onClick={() => onSort("movie.numberInStock")} > Stock</th>
                <th scope="col" onClick={() => onSort("movie.dailyRentalRate")}> Rate</th>
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

export default MoviesTable;