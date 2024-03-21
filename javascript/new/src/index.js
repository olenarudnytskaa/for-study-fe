import React from "react";
import  ReactDOM from "react-dom";
import './style.css';
import state  from './redux/state.js';
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Subscrib } from "./redux/state.js";


export let rerenderEntiretree = (state) => {
    ReactDOM.render
    (<BrowserRouter><App state= {state}></App>
    </BrowserRouter>, document.querySelector('#header'));
}



rerenderEntiretree(state);

Subscrib(rerenderEntiretree)