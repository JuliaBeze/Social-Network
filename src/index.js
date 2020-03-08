import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SocialApp from "./App";

//
// let rerenderEntireTree = () => {
    ReactDOM.render(
        <SocialApp/>,
        document.getElementById('root'));
// };
//
// rerenderEntireTree(store.getState())
//
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// });

serviceWorker.unregister();
