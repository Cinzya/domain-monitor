import { DOMAIN_INPUT } from '../actions/types';

const initialState = {
    domainName: '',
    apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH"
};

export default function(state = initialState, action){
    switch(action.type) {
        case DOMAIN_INPUT:
            return {
                ...state,
                value: action.payload 
            };
        default:
            return state;
    }
}