import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import {StateContextProvider} from './context/ResultContextProvider';
import './index.css';

ReactDOM.render( 

    <StateContextProvider>

        <Router>
            <App />
        </Router>

    </StateContextProvider>
    , 

document.getElementById('root'));