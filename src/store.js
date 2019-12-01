//import { createStore } from "redux";
//import rootReducer from './reducers';
//export default(initialState) => {
   // return createStore(rootReducer, initialState);
//}

// Import createStore and applyMiddleware
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// Import thunk
import thunk from 'redux-thunk';
import rootReducer from './reducers';
 
const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)
 

 
// export const store = createStore(reducers, applyMiddleware(<b>thunk</b>));
export default store;