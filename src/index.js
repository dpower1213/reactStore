import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from "./context/AppContext";
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <AppContextProvider>
          <CssBaseline />
          <App />
        </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// reportWebVitals();