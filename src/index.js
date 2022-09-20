import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </React.StrictMode>
);
