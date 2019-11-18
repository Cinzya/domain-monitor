import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';

class InputField extends Component {
    constructor(props) {
        super(props);
        state = {
            domain: ''
        };
    }

    handleDomain = e => this.setState({ domain: e.target.value })
    getData() {
        fetch("https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=at_XtU8CpRcPmD7AX6RWswtOOK0voVgH&domainName=" + {domain}.then(response => {
            return response.json();
        })
            .then(responseData => {
                console.log(responseData);
            });
    };

    render() {
        const { domain } = this.state;
        return (
            <div className="domain-eingabe">
                <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
                       value={this.state.text} onChangeText={text => this.setState({ text })}/>
                <button onClick={this.getData} className="button">Hinzufügen</button>
            </div>
        );
    };

}
export default InputField;

