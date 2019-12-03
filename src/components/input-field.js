import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addDomain} from '../actions';
import {addStatus} from '../actions';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
            domainName: ""
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
            <form className="domain-eingabe"
                  onSubmit={this.onSubmitHandler} >
                <input  type="text" 
                        id="eingabefeld" 
                        placeholder="Geben Sie hier Ihre Wunschdomain ein"
                        value={this.state.domainName} 
                        onChange={this.changeDomainHandler}/>
                <input  type="submit" 
                        className="button" 
                        value="Prüfen"
                />
                <button>onClick={() => dispatch(addDomain())}
                        onClick={() => dispatch(addStatus())}</button>
            </form>
        );
    };
}

export default InputField;

