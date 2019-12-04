import React, { Component } from 'react';
import zahnrad from '../img/zahnrad.svg';
import muelleimer from '../img/muelleimer.svg';

class List extends Component {
    constructor (props){
        super(props)
        this.state = {
            apiKey: "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH",
            domainName: "",
            domains: [{
                id: "",
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

    addDomain(toAdd){
        toAdd.id = Math.random();
        let toAdds = [...this.state.toAdds, toAdd];
        this.setState({
            toAdds: toAdds
        })
    }

    render() {
        return(
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
        )
    }
}

export default List;