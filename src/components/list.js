import React, { Component } from 'react';
import logo from '../img/logo.svg';

import { Row } from './row';
import { InputField } from './input-field';

class List extends Component{
    constructor (props){
        super(props);
        this.state = {
            apiKey: "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX",
            domainName: "",
            domains: []
        };
        
        this.renderTableData = this.renderTableData.bind(this);
        this.changeDomainHandler = this.changeDomainHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.compare = this.compare.bind(this);
        this.sort = this.sort.bind(this);
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

        // Eingabefeld wird geleert
        const newDomain = '';
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

    compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const domainA = a.DomainInfo.domainName.toUpperCase();
        const domainB = b.DomainInfo.domainName.toUpperCase();

        let comparison = 0;
        if (domainA > domainB) {
            comparison = 1;
        } else if (domainA < domainB) {
            comparison = -1;
        }
        return comparison;
    }

    sort() {
        const sorted = this.state.domains.sort(this.compare);
        this.setState({
            domains: sorted
        });
        console.log("Domains sortiert");
        console.log(this.state.domains);
    }

    render() {
        return (
            <div className="column-right">
                <div className="logo">
                    <h1><span>Domain</span> <span>Monitor</span></h1>
                    <img src={logo}
                         alt="Logo"/>
                </div>

                <InputField domainName={this.state.domainName} changeDomain={this.changeDomainHandler} Submit={this.onSubmitHandler}/>

                <div className="domain-liste">
                    <div className="table-scrollable">
                        <table>
                            <tbody>
                            <tr>
                                <th className="symbole">Einstellungen</th>
                                <th> <button onClick={this.sort}> Domain </button></th>
                                <th> <button> Status </button> </th>
                                <th> <button>zuetzt geprüft</button> </th>
                                <th> <button>hinzugefügt</button> </th>
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

export default List;