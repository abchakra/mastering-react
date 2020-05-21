import React, { Component } from 'react';
import Like from './like';
import TableHeader from './common/tableHeader';
class MoviesTable extends Component {

    columns = [
        { path: "title", label: 'Title' },
        { path: "movie.genre.name", label: 'Genre' },
        { path: "movie.numberInStock", label: 'Stock' },
        { path: "movie.dailyRentalRate", label: 'Rate' },
        { key: 'like' },
        { key: 'delete' },

    ]
    render() {
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
        return (<table className="table">

            <TableHeader
                columns={this.columns}
                sortColumn={sortColumn}
                onSort={onSort} />
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