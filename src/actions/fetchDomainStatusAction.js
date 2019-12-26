import {GET_STATUS} from './index';

export function fetch(event) {
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
    event.preventDefault();
    // Ausgabe in der Konsole der aktuellen Werte
    console.log(this.state);

    // HTTP Anfrage an API
    const request = fetch( "https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + this.props.apiKey + "&domainName=" + this.props.searchTerm, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        // Ausgabe in der Konsole der API Response
        .then(responseData => {
            // responseData wird in den State geschrieben
            return addData(responseData.DomainInfo);
        });

    return {
        type: GET_STATUS,
        payload: request
    }
}