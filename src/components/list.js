import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row } from './row';

import { deleteEvent } from '../actions/deleteDomainAction';

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
        const { error, loading, domains } = this.props;

        if (error) {
            return <div className="error">Oops! Uns ist ein Fehler unterlaufen. Versuche es später noch ein Mal.</div>;
        }

        if (loading) {
            return <div className="loading">Loading...</div>;
        }

        return(
                <div className="domain-liste">
                    <div className="table-scrollable">
                        <table>
                            <tbody>
                            <tr>
                                <th className="symbole">Einstellungen</th>
                                <th> <button onClick={() =>
                                    {
                                        const sorted = domains.sort(this.compare("domainName"));
                                        this.setState({
                                            domains: sorted
                                        });
                                    }
                                }> Domain </button></th>
                                <th> <button onClick={() => {
                                    const sorted = domains.sort(this.compare("domainAvailability"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}> Status </button> </th>
                                <th> <button onClick={() => {
                                    const sorted = domains.sort(this.compare("timeChecked"));
                                    this.setState({
                                        domains: sorted
                                    });
                                }}>zuetzt geprüft</button> </th>
                                <th> <button onClick={() => {
                                    const sorted = domains.sort(this.compare("timeAdded"));
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
        )
    }
}

const mapStateToProps = state => ({
    domains: state.Domain.domains,
    loading: state.Domain.loading,
    error: state.Domain.error
});

const mapDispatchToProps = {
    deleteEvent
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);