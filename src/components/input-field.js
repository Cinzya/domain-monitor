import React from 'react';

import { connect } from 'react-redux';
import { handleChange } from '../actions/domainInputActions';

export const InputField = (props) => (
    <form className="domain-eingabe"
        onSubmit={(event)=> {props.Submit(event)}}>

        <input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"
               value={props.domainName} onChange={props.changeDomain}/>
        <input type="submit" className="button" value="Hinzufügen"/>
    </form>

);const mapStateToProps = state => ({
    domainInput: state.domainInput.value
});

export default connect(mapStateToProps, { handleChange })(InputField);