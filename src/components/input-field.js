import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
            domainName: null,
            };
        this.getData = this.getData.bind(this)
        };


    getData(event) {
		event.preventDefault();
        this.setState({
            domainName: this.element.value
        });
        console.log(this.state);
        fetch( "https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + this.state.apiKey + "&domainName=" + this.state.domainName, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            console.log(responseData);
        });
    }

    render() {
        return (
            <form className="domain-eingabe" onSubmit={this.getData} >
                <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
                ref={el => this.element = el}/>
                <input type="submit" className="button" value="Hinzufügen"/>
            </form>
        );
    };
}

export default InputField;

