import React, { Component } from 'react';
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TableHeader extends Component {


    renderSortIcon = (column) => {

        const { order, path } = this.props.sortColumn;
        if (column.path !== path) {
            return null;
        } else if (order === 'asc') {
            return <FontAwesomeIcon icon={faSortUp} />
        } else if (order === 'desc') {
            return <FontAwesomeIcon icon={faSortDown} />
        }
    }

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
        return (<thead>
            <tr>
                {this.props.columns.map(column => (
                    <th
                        className="clickable"
                        key={column.path || column.key}
                        onClick={() => this.raiseSort(column.path)}
                    >
                        {column.label}{this.renderSortIcon(column)}
                    </th>
                ))}
            </tr>
        </thead>
        );
    }
}

export default TableHeader;