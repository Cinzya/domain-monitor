import React from 'react';
import {shallow, configure} from "enzyme";
import List from "./list";
import InputField from "./input-field";
//import {render, fireEvent, cleanup} from '@testing-library/react';
//React Doku
import { render, unmountComponentAtNode } from "react-dom"; 
import { act } from "react-dom/test-utils"; 


describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });

     // funktioniert nicht wegen shallow-Zeile
    it('should click submit button', () => {
        const wrapper = shallow(<InputField />);
        const button = wrapper.find('.button');
        button.simulate('click');
        const input = wrapper.find('input.button').text();
    });

      
    
});