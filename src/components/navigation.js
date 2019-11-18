import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <footer>
                <ul>
                    <li>Datenschutz</li>
                    <li>Impressum</li>
                </ul>
                <div className="clear"></div>
            </footer>
        );
    };
};

export default Navigation;