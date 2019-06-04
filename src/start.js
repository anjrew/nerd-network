import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './pages/welcome';
import { App } from './pages/app';


console.log(location.pathname);

ReactDOM.render(
    // <Welcome />,
    <App/>,
    document.querySelector('main')
);


