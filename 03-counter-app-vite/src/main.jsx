import React from "react";
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorlApp';
//import { FirsApp } from "./FirsApp";
import './styles.css';
import { CounterApp } from "./CounterApp";
CounterApp

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={10}/>
    </React.StrictMode>
)