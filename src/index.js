import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router}from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthenticationContextProvider from './Contexts/Authentication.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthenticationContextProvider>
    <App />
    </AuthenticationContextProvider>
    </Router>
);


reportWebVitals();
