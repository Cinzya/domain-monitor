import React from 'react';
import {shallow, configure} from "enzyme";
import List from "./list";
import * as renderer from 'react-test-renderer';
import InputField from "./input-field";

describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });

    // funktioniert nicht
    it('renders correctly', () => {
        const list = renderer.create(<List />).toJSON();
        expect(list).toMatchSnapshot();
    });

    // funktioniert nicht
    it('buttons are clickable', () => {
        const {getByTestId} = render(<List />);
        expect(getByTestId('button')).toHaveTextContent("Domain");
    });

    // funktioniert nicht wegen shallow-Zeile
    it('should click submit button', () => {
        const wrapper = shallow(<InputField />);
        const button = wrapper.find('.button');
        button.simulate('click');
        const input = wrapper.find('input.button').text();
    });

   
    

    
});