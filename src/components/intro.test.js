import React from 'react';
import {shallow} from "enzyme";
import Intro from "./intro";

describe('Intro', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Intro debug />);
        expect(component).toMatchSnapshot();
    });

    //it('contains a paragraph that explains how the DomainMonitor works', () => { };
});