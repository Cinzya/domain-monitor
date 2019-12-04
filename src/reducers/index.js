import { combineReducers } from "redux";
import domainInputReducer from './domainInputReducer';

//const rootReducer = combineReducers({
//});

//export default rootReducer

export default combineReducers({
    domainInput: domainInputReducer
});