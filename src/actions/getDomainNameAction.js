import {GET_DOMAIN} from './index';

export function changeDomainHandler(event) {
    const domainName = event.target.value;
    return {
        type: GET_DOMAIN,
        payload: domainName
    }
}