import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './app/AppWrapper';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import Theme from './Theme';

import reportWebVitals from './reportWebVitals';

/* 
  Top level of the react app
  hook into DOM with the id root
*/

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <AppWrapper />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();