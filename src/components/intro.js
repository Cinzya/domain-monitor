import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return(
            <div className="column-left">
               
                <h2>Was ist ein <br></br> Domain Monitor?</h2>
                <p>Domain Monitor ist ein Dienst, mit dem Benutzer den Registrierungsstatus von Domains überwachen
                    können. Der Service benachrichtigt Sie (per E-Mail, wenn überwachte Domains kurz vor dem Ablauf
                    stehen und ihren Status ändern. Mit Domain Monitor können Sie Ihre Domains im Auge behalten ... oder
                    die anderer! Ablaufdaten, Statusänderungen - geben Sie einfach die Domainnamen ein, die Sie
                    überwachen möchten, und das Tool benachrichtigt Sie laufend über wichtige Änderungen bei der
                    Registrierung. Dieser Dienst kann sechs wichtige TLDs überwachen: .com, .org,, info, .us, .net und
                    .biz.</p>
                

            </div>
        );
    };
}

export default Intro;
