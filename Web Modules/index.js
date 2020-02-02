import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Components/footer';
import Header from './Components/header.js';
import Main from './Components/main.js';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
    <Header/>
    <Main/>
<Footer/>
</div>
, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
