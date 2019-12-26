import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row } from './row';
import InputField from './input-field';

import { deleteEvent } from '../actions/deleteDomainAction';

import logo from '../img/logo.svg';


class List extends Component{
    constructor (props){
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        this.compare = this.compare.bind(this);
    }

    //Zeile wird gelöscht
    deleteEvent(index){
        this.props.deleteEvent(index);
    }

    renderTableData(){
        return this.props.domains.map((domain, index) => {
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
        return this.props.innerSort(key, key);
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
                                <th> <button onClick={() =>
                                    {
                                        const sorted = this.props.domains.sort(this.compare("domainName"));
                                        this.setState({
                                            domains: sorted
                                        });
                                    }
                                }> Domain </button></th>
                                <th> <button onClick={() => {
                                    const sorted = this.props.domains.sort(this.compare("domainAvailability"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}> Status </button> </th>
                                <th> <button onClick={() => {
                                    const sorted = this.props.domains.sort(this.compare("timeChecked"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}>zuetzt geprüft</button> </th>
                                <th> <button onClick={() => {
                                    const sorted = this.props.domains.sort(this.compare("timeAdded"));
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
        )
    }
}

const mapStateToProps = state => {
    return state.Domain;
};

const mapDispatchToProps = {
    deleteEvent
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);