import React from 'react';
import {shallow} from "enzyme";
import Intro from "./intro";

describe('Intro', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Intro debug />);
        expect(component).toMatchSnapshot();
    });

    it('contains a paragraph that explains how the DomainMonitor works', () => {
        const component = shallow(<Intro />);
        const expectedOutput =
        '<div class="column-left"><h2>Was ist ein <br/> Domain Monitor?</h2><p>Der Domain Monitor ist ein Dienst, mit dem Benutzer den Registrierungsstatus von Domains überwachen können. Mit Domain Monitor können Sie Ihre Domains im Auge behalten ... oder die anderer! Geben Sie einfach die Domainnamen ein, die Sie überwachen möchten, und das Tool teilt Ihnen den Verfügbarkeitsstatus mit und wann Sie diesen zuletzt überprüft haben. Sie können die Verwaltungsliste je nach Präferenz sortieren.</p></div>';
        const realOutput = component.find('div.column-left').html();
        expect(realOutput).toEqual(expectedOutput);
    });

   
});