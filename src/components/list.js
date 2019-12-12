import React, { Component } from 'react';
import logo from '../img/logo.svg';

import { Row } from './row';
import { InputField } from './input-field';

let count = 0;

class List extends Component{
    constructor (props){
        super(props);
        this.state = {
            apiKey: "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX",
            domainName: "",
            domains: [],
        };
        this.renderTableData = this.renderTableData.bind(this);
        this.changeDomainHandler = this.changeDomainHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.fakeID = count;
        count ++;
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
console.log("***************",toAdd, this.fa);
        // ID ins State geschrieben
        toAdd.id = Math.random();
        // aktuelle Zeit wird ins State geschrieben
        //toAdd.checked = this.addTime();
        // Daten werden ins State übertragen
        let domains = [toAdd];
        //Daten werden in das Array gepusht
        // this.state.domains.push({
        //     id: this.id,
        //     apiKey: "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX",
        //     domainName: "",
        //     DomainInfo: []
        // });
    
        this.setState((state, pr) => {
            return {domains: state.domains.concat({
                    id: this.id,
                    apiKey: "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX",
                    domainName: "",
                    DomainInfo: []
                })}
        });
        this.id = this.id + 1;
        console.log(this.state.domains)
    }

    //Zeile wird gelöscht
    deleteEvent = (index) =>{
       const copyRowArray = Object.assign([], this.state.domains);
       copyRowArray.splice (index, 1);
           this.setState({
               domains : copyRowArray
           })
       }

       //andere Lösung für Zeile hinzufügen
       /* addRow = () => {
            this.rowID = this.rowID + 1;
            const copyRowArray = Object.assign([], this.state.domains);
            copyRowArray.push({
                id: this.rowID,
                DomainInfo: []
            })
            this.setState({
                domains : copyRowArray,
               })
            }

            //wird noch nicht aufgerufen
/*             addRow = () => {
                let domains = [];
                const copyRowArray = Object.assign([], this.state.domains);
                this.setState({
                    domains : domains.concat(copyRowArray), 
                });}

            // fügt neue Zeile hinzu, aber doppelt
            addRow2 = () => {
                const copyRowArray = Object.assign([], this.state.domains);
                this.setState({
                        domains : this.state.domains.concat(copyRowArray),
                       });
                } */
            


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
            return this.state.domains.map((domain, index)=> {
                     return (
                        <Row 
                        key= {domain.id}
                        id={domain.id} 
                        url={domain.DomainInfo.domainName} 
                        availability={domain.DomainInfo.domainAvailability}
                        delete={this.deleteEvent.bind(this, index)}/>
                     );
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

                <InputField domainName={this.state.domainName} changeDomain={this.changeDomainHandler} Submit={this.onSubmitHandler}/>

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

export default List;