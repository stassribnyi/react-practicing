import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";

import Bootstrap from './vendor/bootstrap-without-jquery';

import App from './pages/App';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';


ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            {/* <Route exact path="/" component={Featured}></Route>
            <Route path="archives" component={Archives}></Route>
            <Route path="settings" component={Settings}></Route> */}
        </Route>
    </Router>,
    document.getElementById('app')
);