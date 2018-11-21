import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import empDashboard from './views/employeeDashboard';
import * as serviceWorker from './serviceWorker';
import Root from './root'
import { store } from './store';

const render = () => {
  ReactDOM.render( <Root/>, document.getElementById('root'));
}

render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
