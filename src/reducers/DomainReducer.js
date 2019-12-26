import {CLEAR_INPUT,DELETE_ROW,GET_DOMAIN,GET_STATUS} from '../actions';

const initialState = {
    searchTerm: '',
    apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
    domains: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_DOMAIN:
            return {
                ...state,
                searchTerm: action.payload
            };

        case GET_STATUS:
            return {
                ...state,
                domains: [...state.domains, action.payload]
            };

        case CLEAR_INPUT:
            return {
                ...state,
                searchTerm: action.payload
            };

        case DELETE_ROW:
            return {
                ...state,
                domains: [...state.domains, action.payload]
            };

        default:
            return state;
    }
}