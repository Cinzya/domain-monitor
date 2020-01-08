import React from 'react';
import { shallow } from "enzyme";
import { InputField } from "./input-field";
import {cleanup} from '@testing-library/react';


afterEach(cleanup);

describe('InputField', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<InputField debug />);
        expect(component).toMatchSnapshot();
    });

    it('renders the input field where you can enter some text', () => {
        const eingabefeld = shallow(<InputField />);
        const expectedOutput =
            '<form class="domain-eingabe">' +
            '<input type="text" id="eingabefeld" placeholder="Geben Sie hier Ihre Wunschdomain ein"/>' +
            '<input type="submit" class="button" value="Hinzufügen"/>' +
            '</form>';
        const realOutput = eingabefeld.find('form.domain-eingabe').html();
        expect(realOutput).toEqual(expectedOutput);
    });

    it('has a button where you can add the domain to your list', () => {
        const eingabefeld = shallow(<InputField />);
        const expectedOutput = '<input type="submit" class="button" value="Hinzufügen"/>';
        const realOutput = eingabefeld.find('.button').html();
        expect(realOutput).toEqual(expectedOutput);

    });

    it('renders inputfield with button', () => {
        const eingabefeld = shallow(<InputField />);
        expect(eingabefeld.find('input').length).toEqual(2);
      });



});