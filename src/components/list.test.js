import React from 'react';
import {shallow} from "enzyme";
import List from "./list";
import * as renderer from 'react-test-renderer';

describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const list = renderer.create(<List />).toJSON();
        expect(list).toMatchSnapshot();
    });

   
    
});