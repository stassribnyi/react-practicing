import React from 'react';

import Article from '../components/Article';

export default class Archives extends React.Component {
    render() {
        debugger;
        const { search } = this.props.location;
        const { params } = this.props.match;
        const { article } = params;
        const query = new URLSearchParams(search);
        const { date, filter } = {
            date: query.get('date'),
            filter: query.get('filter')
        };

        const Articles = [
            'First Article',
            'Second Article',
            'New Article',
            'Old Article',
            'Payed Article'
        ].map((title, i) => (<Article key={i} title={title} />));

        return (
            <div>
                <h1>Archives</h1>

                article: {article}, date: {date}, filter: {filter}

                <div className="row">
                    {Articles}
                </div>
            </div>
        );
    }
}