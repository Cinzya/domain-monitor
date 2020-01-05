import React from 'react';
import {shallow} from "enzyme";
import {InputField} from "./input-field";

describe('InputField', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<InputField debug />);
        expect(component).toMatchSnapshot();
    });

    
});