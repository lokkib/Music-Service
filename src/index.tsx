import 'overlayscrollbars/css/OverlayScrollbars.css';

import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.querySelector('.wrapper') as Element);
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    </React.StrictMode>
);
