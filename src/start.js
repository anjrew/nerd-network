import React from 'react';
import ReactDOM from 'react-dom';
import { Registration } from './pages/registration';


console.log(location.pathname);

if (location.pathname === '/welcome') {
    ReactDOM.render(
        <Home />,
        document.querySelector('main')
    );
} else {
    ReactDOM.render(
        <Home />,
        document.querySelector('main')
    );
}




function Home() {
    return (
        <Registration />
    );
}

function HelloWorld() {
    return (
        <div>Hello, World!</div>
    );
}
