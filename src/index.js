import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';


//Reducer wird in Store eingebunden, zusätzlich wird Redux als CHROME DEV TOOL 
//Extention eingebonden von https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store ={store}>
    <App />
    </Provider>,
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
