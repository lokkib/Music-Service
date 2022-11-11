import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import App from './App';
import { store } from './redux/store';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
 
                <CookiesProvider>
                    <BrowserRouter>
                        <App></App>
                    </BrowserRouter>
                </CookiesProvider>
      
        </Provider>
    </React.StrictMode>
);
