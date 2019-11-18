import React, { Component } from 'react';

const getData = () => {
    fetch("https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + apiKey + "&domainName=" + domain).then(response => {
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
               /* <input type="button" className="button" value="Hinzufügen"/>*/
                <button onClick={getData} className="button">Hinzufügen</button>
            </div>
        );
    };
}

export default InputField;