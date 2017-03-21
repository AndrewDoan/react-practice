import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Navigation from './Navigation';
import './index.css';

ReactDOM.render(
	<div>
		<App />
		<Header />
		<Navigation />
	</div>,
  document.getElementById('root')
);
