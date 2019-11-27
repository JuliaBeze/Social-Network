import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import SocialApp from "./App";


// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000)

let rerenderEntireTree = () => {
    ReactDOM.render(
                <SocialApp/>,
            document.getElementById('root'));
            };

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

serviceWorker.unregister();
