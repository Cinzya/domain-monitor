import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import List from "./list";

describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });

    //Test addData Function
    it('should add domain API Data into the state', () => {
        const component = shallow(<List/>);
        const toAdd = 
        component.instance().addData(toAdd);
        expect(component.instance().state).toBe(responseData.DomainInfo)
    });
});