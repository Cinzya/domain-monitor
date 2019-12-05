import React, { Component } from 'react';
import logo from '../img/logo.svg';

import { Row } from '../components/row';


class Content extends Component{
    constructor (props){
        super(props)
        this.state = {
            apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
            domainName: "",
            domains: []
        }
        this.renderTableData = this.renderTableData.bind(this);
        this.changeDomainHandler = this.changeDomainHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    changeDomainHandler(event) {
        // domainName wird der Wert des Eingabefelds zugewiesen
        this.setState({
            domainName: event.target.value
        });
    }

    // Speichern der aktuellen Zeit für Prüfzeit
    // !! noch nicht Funktionsfähig !!
    addTime() {
        //let today = new Date();
        //let date = today.getFullYear()+'
        //let time = today.getHours()+ ":
        //let dateTime = date+' '+time;
        //return dateTime
    };

    // Übertragen von Daten in den State
    addData(toAdd){
        // ID ins State geschrieben
        toAdd.id = Math.random();
        // aktuelle Zeit wird ins State geschrieben
        //toAdd.checked = this.addTime();
        // Daten werden ins State übertragen
        let domains = [toAdd];
        this.setState({
            domains: domains
        });
        console.log(this.state.domains)
    }

    onSubmitHandler(event) {
		event.preventDefault();
        // Ausgabe in der Konsole der aktuellen Werte
        console.log(this.state);

        // HTTP Anfrage an API
        fetch( "https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + this.state.apiKey + "&domainName=" + this.state.domainName, {
            method: 'GET',
        })
        .then(response => {
            return response.json();
        })
            // Ausgabe in der Konsole der API Response
        .then(responseData => {
            console.log(responseData);
            // responseData wird in den State geschrieben
            this.addData(responseData);
        });

        // ?
        this.domainName = this.state;
        const newDomain = '';

        // Eingabefeld wird geleert
        this.setState({
            domainName: newDomain
        });
    }

    renderTableData(){
       return this.state.domains.map(domain => {
            return (
                <Row id={domain.id} url={domain.DomainInfo.domainName} availability={domain.DomainInfo.domainAvailability}/>
            )
        })
    }


    render() {
      return (
            <div className="column-right">
                <div className="logo">
                    <h1><span>Domain</span> <span>Monitor</span></h1>
                    <img src={logo}
                        alt="Logo"/>
                </div>
                {/* // InputField Component */}
                    <form className="domain-eingabe"
                      //hier muss noch iwie {this.additem} hin
                    onSubmit={(event)=> {this.onSubmitHandler(event)}} >
                    <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
                        value={this.state.domainName} onChange={this.changeDomainHandler}/>
                    <input type="submit" className="button" value="Hinzufügen"/>
                </form> {/* /* <List entries={this.state.domains}/>
        div Elemente um form und um alles, damit es klappt*/}

                    {/*  List Component  */}
                    <div className="domain-liste">
                        <div className="table-scrollable">
                            <table>
                                <tbody>
                                <tr>
                                    <th className="symbole">Einstellungen</th>
                                    <th>Domain</th>
                                    <th>Status</th>
                                    <th>zuletzt geprüft</th>
                                    <th>hinzugefügt</th>
                                    <th className="symbole">Löschen</th>
                                </tr>
                                    {this.renderTableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
      );
    }
  }

  export default Content;