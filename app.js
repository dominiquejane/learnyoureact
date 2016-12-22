import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementbyId('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementbyId("app"));

	