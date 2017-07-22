import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch 
} from 'react-router-dom'
import App from '../App';
import rdView from '../views/reduxView';

const reduxView = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../views/reduxView'))
    }, 'reduxView')
}

const RouteConfig = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/reduxView" component={rdView} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default RouteConfig;