import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
/* This is equivalent to import ReactDOM from 'react-dom'; const render = ReactDOM.render;*/

import App from './components/App';

render(
	<App />,
	document.getElementById('root')
);