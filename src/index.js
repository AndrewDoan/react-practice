import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import './index.css';

ReactDOM.render(
	<div>
		<App />
		<Header />
		<Navigation />
		<Main />
	</div>,
  document.getElementById('root')
);
