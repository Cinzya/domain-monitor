import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return(
            <div className="domain-eingabe">
                <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"/>
                <input type="button" className="button" value="Hinzufügen"/>
            </div>
        );
    };
}

export default InputField;