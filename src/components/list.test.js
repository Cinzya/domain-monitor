import React from 'react';
import {shallow, configure} from "enzyme";
import List from "./list";
import { InputField } from "./input-field"; //muss in {} stehen, damit shallow funktioniert?
//import {render, fireEvent, cleanup} from '@testing-library/react';


describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });

     
    it('should click submit button', () => {
        const wrapper = shallow(<InputField />);
        const button = wrapper.find('.button');
        button.simulate('click');
        const input = wrapper.find('input.button').text('Hinzufügen');
    });

    //Warum gibt er ein leeres Objekt aus
    it("should get domainName", () => {
        const wrapper = shallow(<List />);
        const domain = wrapper.find('domainName');
        expect(domain).toEqual('');
    });

    
});