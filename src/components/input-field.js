import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions/domainInputActions';


class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
            domainName: ""
            };

    // Aus Redux Tutorial
    handleChange = e => {
        this.props.handleChange(e);
    };

        this.changeDomainHandler = this.changeDomainHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        };

    changeDomainHandler(event) {
        // domainName wird der Wert des Eingabefelds zugewiesen
        this.setState({
            domainName: event.target.value
        });
    }

    onSubmitHandler(event) {
		event.preventDefault();
        // Ausgabe in der Konsole der aktuellen Werte
        console.log(this.state);

        // HTTP Anfrage an API
        fetch( "https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + this.state.apiKey + "&domainName=" + this.state.domainName, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
            // Ausgabe in der Konsole der API Response
        .then(responseData => {
            console.log(responseData);
        });

        // Eingabefeld wird geleert
        this.setState({
            domainName: ""
        })
    }
    

    render() {
        return (
            <form className="domain-eingabe">
                onSubmit={this.onSubmitHandler} 
                <input id="eingabefeld"
                    type="text"
                    placeholder="Geben Sie hier Ihre Wunschdomain ein"
                    value={this.props.domainName}
                    onChange={this.changeDomainHandler}
                    onChange={handleChange}
                />

            <input className="button"
                type="submit"
                value="Hinzufügen"
            />
            </form>
           
                  
                //<input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
                       //value={this.state.domainName} onChange={this.changeDomainHandler}/>
               // <input type="submit" className="button" value="Hinzufügen"/>
            
        );
    };
}

const mapStateToProps = state => ({
    domainInput: state.domainInput.value
});

export default connect(mapStateToProps, { handleChange })(InputField);

