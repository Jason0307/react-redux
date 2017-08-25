import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './stores/configureStore';
import App from './containers/App';
import {loadScopes} from './actions/ScopeAction';
import 'antd/dist/antd.css';
import './css/app.css';

const store = configureStore();
store.dispatch(loadScopes());

ReactDOM.render(
 <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app')
 );