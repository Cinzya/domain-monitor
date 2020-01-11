import { shallow } from 'enzyme';

import React from 'react';
import Row from './row';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import deleteEvent from './list';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



let container = null;

beforeEach(() => {
  // DOM element als render Ziel festlegen
  container = document.createElement("div");
  //container hängt an document dran 
  document.body.appendChild(container);
  });


afterEach(cleanup);

describe('Row', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Row debug />);
        expect(component).toMatchSnapshot();
    })
    it("renders without crashing", () => {
    ReactDOM.render(<Row/>, container)
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
        const row = shallow (<Row />);
        const muelleimer = row.find("form");
        muelleimer.simulate("click");
        expect(deleteEvent).tobeCalled;
      })
      }

);
