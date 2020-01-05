import React from 'react';
import {shallow} from "enzyme";
import Navigation from "./navigation";

describe('Navigation', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Navigation debug />);
        expect(component).toMatchSnapshot();
    });

    it('should render navigation footer', () => {
        const wrapper = shallow(<Navigation />);
        const li = wrapper.find('li');
        const result = li.text();
        expect(result).toBe('Datenschutz' && 'Impressum');
    });
});

