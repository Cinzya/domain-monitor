import React, { Component } from 'react';

const getData = (domain) => {
    fetch("https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=at_XtU8CpRcPmD7AX6RWswtOOK0voVgH&domainName=" + domain).then(response => {
        return response.json();
    })
        .then(responseData => {
            console.log(responseData);
        });
};


class InputField extends Component {
    render() {
        return(
            <div className="domain-eingabe">
                <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"/>
                <button onClick={getData} className="button">Hinzufügen</button>
            </div>
        );
    };
}

export default InputField;