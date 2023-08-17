import React from 'react';
//import { render } from 'react-dom';
import { createRoot } from "react-dom/client";
//import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const root = createRoot(document.getElementById('app'));

root.render( <App />);