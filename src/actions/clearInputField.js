import {CLEAR_INPUT} from './index';

export function clearState() {
    return {
        type: CLEAR_INPUT,
        payload: ''
    }
}
