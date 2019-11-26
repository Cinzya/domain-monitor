import React, { Component } from 'react';
import logo from '../img/logo.svg';
import zahnrad from '../img/zahnrad.svg';
import muelleimer from '../img/muelleimer.svg';

import InputField from "./input-field";
// blablabla
class List extends Component {
    constructor (props){
        super(props)
        this.state = {
            domains: [{
                name: "",
                status: "",
                geprueft: "",
                hinzugefuegt:"",
            }]
        }
        this.renderTableData = this.renderTableData.bind(this);
    }
    renderTableData(){
        return this.state.domains.map((domain, index) => {
            const {name ,status, geprueft, hinzugefuegt} = domain
            return (
                <tr>
                <td><img src={zahnrad} /></td>
                <td>{name}</td>
                <td><span>{status}</span></td>
                <td>{geprueft}</td>
                <td>{hinzugefuegt}</td>
                <td><img src={muelleimer} /></td>
            </tr>

            )
        })
    }
    render() {
        return(
            <div className="column-right">
                <div className="logo">
                    <h1><span>Domain</span> <span>Monitor</span></h1>
                    <img src={logo}
                         alt="Logo"/>
                </div>

                <InputField />

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
        )
    }
}

export default List;