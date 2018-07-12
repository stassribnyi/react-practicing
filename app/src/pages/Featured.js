import React from 'react';
import { Link } from 'react-router-dom';

export default class Featured extends React.Component {
    render() {
        return (
            <div>
                <h1>Featured</h1>
                <div className="well">
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non
                    ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor
                    consectetur.
                </p>

                    <Link className="btn btn-info" to="/">Home</Link>

                </div>
            </div>
        );
    }
}