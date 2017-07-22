import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import Routes from './route/routes';
import { BrowserRouter, Route } from 'react-router-dom';
import rdView from './views/reduxView';
ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, document.getElementById('root'));
