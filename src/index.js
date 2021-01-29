import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import store from "./redux/redux-store";


let renderEntireThree =(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state = {state} dispatch={store.dispatch.bind(store)} store = {store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderEntireThree(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

