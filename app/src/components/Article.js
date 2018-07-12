import React from 'react';
import { Link } from 'react-router-dom';


export default class Article extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div className="col-md-4">
                <h2>{title}</h2>
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non
                    ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor
                    consectetur.
                </p>

                <Link className="btn btn-info" to="/">Home</Link>

            </div>
        );
    }
}