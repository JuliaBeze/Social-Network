import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import App from './App';
import {Provider} from "react-redux";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store= {store}>
            <App/>,
        </Provider>,
        document.getElementById('root'));
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

serviceWorker.unregister();
