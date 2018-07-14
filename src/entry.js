import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home/Home';
import "./base.scss";

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Home),
    document.getElementById('app')
  );
});
