import addDomainReducer from './adddomain';
import addStatusReducer from './addstatus';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    addDomain: addDomainReducer,
    addStatus: addStatusReducer
})

export default allReducers;

// Mit "combineReducers" können mehrere Reducers miteinander 
// verknüpft werden, ohne Kompliziertes einzelnes Einbinden