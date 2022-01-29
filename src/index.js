import React from 'react';
import ReactDOM from 'react-dom'; 

import './index.css';
import App from './App'; // .js can be hidden from JS files

// index.js == starting point of React JS app (first code that's loaded by the browser)
ReactDOM.render(<App />, document.getElementById('root') // root points to index.html
// <App /> is JSX.  Not understood by the browser but a React template that's passed as HTML element
);