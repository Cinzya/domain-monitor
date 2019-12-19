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
    }

    changeDomainHandler(event) {
        // domainName wird der Wert des Eingabefelds zugewiesen
        this.setState({
            domainName: event.target.value
        });
    }

    // Übertragen von Daten in den State
    addData(toAdd){
        // ID ins State geschrieben
        toAdd.id = Math.random();
        // aktuelles Datum + Uhrzeit wird in State geschrieben
        let tempDate = new Date();
        let currentDate = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        toAdd.timeAdded = currentDate;
        toAdd.timeChecked = currentDate;
        // Daten werden ins State übertragen
        let domains = [toAdd];
        // Der aktuelle State domains wird die API Daten hinzugefügt
        this.setState((state) => {
            return {domains: state.domains.concat(domains)}
        });
        console.log(this.state.domains)
    }

    //Zeile wird gelöscht
    deleteEvent = (index) =>{
       const copyRowArray = Object.assign([], this.state.domains);
       copyRowArray.splice (index, 1);
           this.setState({
               domains : copyRowArray
           })
       };

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
                this.addData(responseData.DomainInfo);
                console.log(this.state.domains);
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
        return this.state.domains.map((domain, index) => {
            return (
                <Row
                    id={domain.id}
                    url={domain.domainName}
                    availability={domain.domainAvailability}
                    checked={domain.timeChecked}
                    added={domain.timeAdded}
                    delete={this.deleteEvent.bind(this, index)}/>
            )
        })
    }

    compare(key) {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return comparison
        };
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
                                <th> <button onClick={() =>
                                    {
                                        const sorted = this.state.domains.sort(this.compare("domainName"));
                                        this.setState({
                                            domains: sorted
                                        });
                                    }
                                }> Domain </button></th>
                                <th> <button onClick={() => {
                                    const sorted = this.state.domains.sort(this.compare("domainAvailability"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}> Status </button> </th>
                                <th> <button onClick={() => {
                                    const sorted = this.state.domains.sort(this.compare("timeChecked"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}>zuetzt geprüft</button> </th>
                                <th> <button onClick={() => {
                                    const sorted = this.state.domains.sort(this.compare("timeAdded"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}>hinzugefügt</button> </th>
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