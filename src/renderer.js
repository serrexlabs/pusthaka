import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux'
import configureStore from "./store/configure-store";

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
