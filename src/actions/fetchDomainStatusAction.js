import {FETCH_DOMAIN_BEGIN} from './index';
import {FETCH_DOMAIN_SUCCESS} from "./index";
import {FETCH_DOMAIN_FAILURE} from "./index";

export const fetchDomainBegin = () => ({
    type: FETCH_DOMAIN_BEGIN
});

export const fetchDomainSuccess = domain => ({
    type: FETCH_DOMAIN_SUCCESS,
    payload: { domain }
});

export const fetchDomainFailure = error => ({
    type: FETCH_DOMAIN_FAILURE,
    payload: { error }
});

export function fetch(searchTerm, apiKey) {
    return dispatch => {
    function addData(toAdd){
        // ID ins State geschrieben
        toAdd.id = Math.random();
        // aktuelles Datum + Uhrzeit wird in State geschrieben
        let tempDate = new Date();
        let currentDate = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        toAdd.timeAdded = currentDate;
        toAdd.timeChecked = currentDate;
        // Daten werden ins State übertragen
        let domains = [toAdd];
        return domains
    }
    dispatch(fetchDomainBegin());
    // HTTP Anfrage an API
    return fetch( "https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + apiKey + "&domainName=" + searchTerm, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        // Ausgabe in der Konsole der API Response
        .then(responseData => {
            // responseData wird in den State geschrieben
            dispatch(fetchDomainSuccess(addData(responseData.DomainInfo)));
            return addData(responseData.DomainInfo);
        })
        .catch(error => dispatch(fetchDomainFailure(error)));
    }
}