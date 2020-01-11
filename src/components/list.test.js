import React from 'react';
import { shallow, configure } from "enzyme";
import List, {onSubmitHandler, compare}  from "./list";
import { InputField } from "./input-field";

describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });


    it('should call onSubmit-function if you click the submit button', () => {
        const wrapper = shallow(<InputField />);
        const button = wrapper.find('.button');
        const input = wrapper.find('input.button').text('Hinzufügen');
        button.simulate('click');
        expect(onSubmitHandler).toBeCalled;
    });

    it('should call the compare -> sort function if you click on the button "Domain" in the tables head', () => {
        const wrapper = shallow(<List />);
        const button = wrapper.find('button').first();
        button.simulate('click');
        expect(compare).toBeCalled;
    });
    
    it('should fetch data', () => {
        const wrapper = shallow(< List />;
        wrapper.update();
        expect(renderedComponent.state('errorStatus')).toBe('Error fetching groceries'));
    });

});