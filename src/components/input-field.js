import React, {Component} from 'react';

import {connect} from 'react-redux';

import {clearState} from '../actions/clearInputField';
import {fetch} from "../actions/fetchDomainStatusAction";
import {changeDomainHandler} from "../actions/getDomainNameAction";

class InputField extends Component {
    constructor() {
        super();
        this.changeDomain = this.changeDomain.bind(this);
        this.Submit = this.Submit.bind(this);
    }

    changeDomain(event) {
        this.props.changeDomainHandler(event);
    }

    Submit(event) {
        this.props.fetch(event);
        this.props.clearState();
    }

    render() {
        return (
            <form className="domain-eingabe"
                  onSubmit={(event) => {
                      this.Submit(event)
                  }}>

                <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
                       value={this.props.searchTerm} onChange={this.changeDomain}/>
                <input type="submit" className="button" value="Hinzufügen"/>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return state.Domain;
};

const mapDispatchToProps = {
    changeDomainHandler,
    fetch,
    clearState
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputField);