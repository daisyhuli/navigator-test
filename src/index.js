import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Provider } from 'react-redux'
import Home from './pages/Home';
import Store from './store';


ReactDOM.render(
    <Provider store={Store}>
        <Home />
    </Provider>
, document.getElementById('root'));
