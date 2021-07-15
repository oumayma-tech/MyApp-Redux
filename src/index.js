import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactDom from 'react-dom'
import App from './App'
import store from './Redux/store'
import { Provider} from 'react-redux'
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    rootElement

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

