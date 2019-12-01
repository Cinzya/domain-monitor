import React, { Component } from 'react';
import List from './list';

class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
            domainName: "",
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
        this.props.addDomain(this.state);

        // HTTP Anfrage an API
        fetch( "https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + this.state.apiKey + "&domainName=" + this.state.domainName, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
            // Ausgabe in der Konsole der API Response
        .then(responseData => {
            this.props.addDomain(responseData);
        });

        this.domainName = this.props.state;
        const newDomain = '';

        // Eingabefeld wird geleert
        this.setState({
            domainName: newDomain
        })

    }

    render() {
        return (
            
            <form className="domain-eingabe" 
            //hier muss noch iwie {this.additem} hin
                  onSubmit={(event)=> {this.onSubmitHandler(event)}} > 
                <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
                       value={this.state.domainName} onChange={this.changeDomainHandler}/>
                <input type="submit" className="button" value="Hinzufügen"/>
            </form>
                /* <List entries={this.state.domains}/> 
                div Elemente um form und um alles, damit es klappt*/
               
           
        );
    };
}

export default InputField;

