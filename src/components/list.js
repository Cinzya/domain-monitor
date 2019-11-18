import React, { Component } from 'react';
import logo from '../img/logo.svg';
import zahnrad from '../img/zahnrad.svg';
import muelleimer from '../img/muelleimer.svg';

import InputField from "./input-field";

class List extends Component {
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
                            <tr>
                                <th className="symbole">Einstellungen</th>
                                <th>Domain</th>
                                <th>Status</th>
                                <th>zuletzt geprüft</th>
                                <th>hinzugefügt</th>
                                <th className="symbole">Löschen</th>
                            </tr>
                            <tr>
                                <td><img src={zahnrad} /></td>
                                <td>dummy-domain.de</td>
                                <td><span>Verfügbar</span></td>
                                <td>23.10.2019, 14:58 Uhr</td>
                                <td>15.10.2019</td>
                                <td><img src={muelleimer} /></td>
                            </tr>
                            <tr>
                                <td><img src={zahnrad} /></td>
                                <td>dummydomain.com</td>
                                <td><span className="red">Belegt</span></td>
                                <td>23.10.2019, 14:58 Uhr</td>
                                <td>15.10.2019</td>
                                <td><img src={muelleimer} /></td>
                            </tr>
                            <tr>
                                <td><img src={zahnrad} /></td>
                                <td>domaindummy.com</td>
                                <td><span>Verfügbar</span></td>
                                <td>23.10.2019, 14:58 Uhr</td>
                                <td>15.10.2019</td>
                                <td><img src={muelleimer} /></td>
                            </tr>
                            <tr>
                                <td><img src={zahnrad} /></td>
                                <td>dummydomain.de</td>
                                <td><span className="red">Belegt</span></td>
                                <td>23.10.2019, 14:58 Uhr</td>
                                <td>15.10.2019</td>
                                <td><img src={muelleimer} /></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;