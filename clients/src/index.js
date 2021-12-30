import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./bootstrap.min.css";
// import 'react-bootstrap/Collapse';
// import "react-bootstrap/dist/react-bootstrap"
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
