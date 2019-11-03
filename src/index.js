import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000)

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store= {store}>
                <App/>,
            </Provider>
        </BrowserRouter>,
            document.getElementById('root'));
            };

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

serviceWorker.unregister();
