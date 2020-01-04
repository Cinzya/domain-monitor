import React from 'react';
/* import {shallow} from "enzyme"; */
import List from "./list";

describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    });

    //Test addData Function
    it('should add Domain data to the table', () => {
        //bei Arrays: expect().toContain();
        //Async Data:(Minute 24:29): expect.assertions(1);
        //return functions.fetchUser().then(data => {expect(data.name).toEqual('')})
        const content = addData(toAdd);
        expect(content).toEqual(responseData)
    });
});