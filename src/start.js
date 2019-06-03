import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './pages/welcome';


console.log(location.pathname);

ReactDOM.render(
    <Welcome />,
    document.querySelector('main')
);


