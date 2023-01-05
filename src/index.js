import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import {StateContextProvider} from './context/ResultContextProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 

    <StateContextProvider>

        <Router>
            <App />
        </Router>

    </StateContextProvider>
);