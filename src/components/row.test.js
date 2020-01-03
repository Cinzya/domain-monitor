import { shallow } from 'enzyme';
import React from 'react';
import Row from './row';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import {create} from 'react-test-renderer';

afterEach(cleanup);

describe('Row', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Row debug />);
        expect(component).toMatchSnapshot();
    })
    it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Row/>, div)
    })
    it("should find muell image element in the DOM", () => {
        const wrapper = shallow(<Row text="test"/>)
        expect(wrapper.find("#muell")).toHaveLength(1);
    })

    it("should find muell image element with className test in the DOM",() => {
        const wrapper = shallow(<Row className="test" text="test"/>)
        expect(wrapper.find("#muell.test")).toHaveLength(1);
    })
    it('should call deleteEvent function wrapper click', () => {
        const mockCallBackClick = jest.fn();
        const wrapper = shallow (<Row onClick={mockCallBackClick} className="test" text="test"/>);
        wrapper.find("input").simulate("click");
        expect(mockCallBackClick.mock.calls.length).toEqual(1);


        //wrapper.find('muell').simulate('click');
        //expect(deleteEvent).toHaveBeenCalled();
      })

});
