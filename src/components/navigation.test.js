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
        const footer = wrapper.find('footer');
        const result = footer.text();
        //.text returns text-content of footer. text-content is Datenschutz+Impressum
        expect(result).toEqual('Datenschutz' + 'Impressum');
    });
});

