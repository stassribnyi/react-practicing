import React from 'react';

import Article from '../components/Article';
export default class Featured extends React.Component {
    render() {
        const Articles = [
            'First Article',
            'Second Article',
            'New Article',
            'Old Article',
            'Payed Article'
        ].map((title, i) => (<Article key={i} title={title} />));

        const adText = Array(5).fill(null).map((v, i) => `Ad spot #${i}`);

        const randomAd = adText[Math.round(Math.random() * adText.length - 1)];

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="well text-center">
                            {randomAd}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Articles}
                </div>
            </div>
        );
    }
}