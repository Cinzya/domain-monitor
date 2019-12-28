import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk)
    )
);
 
export default store;