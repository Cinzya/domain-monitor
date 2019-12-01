import { DOMAIN_INPUT } from './types';

export const handleChange = e => dispatch => {
    dispatch ({
        type: DOMAIN_INPUT,
        payload: e.target.value // Body of function
    });
};