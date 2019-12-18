import React from 'react';
import {shallow} from "enzyme";
import List from "./list";

describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });
});