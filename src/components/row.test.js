import { shallow } from 'enzyme';

import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import { Row } from './row';
import deleteEvent from './list';

let container = null;

beforeEach(() => {
  // DOM element als render Ziel festlegen
  container = document.createElement("div");
  //container hängt an document dran 
  document.body.appendChild(container);
  });


afterEach(cleanup);

describe('Row', () => {
  it('expect to render Row component', () => {
    const component = shallow(<Row debug />);
    expect(component).toMatchSnapshot();
});

it('is expected to call function delete on click on the mülleimer', () => {
    const component = shallow(<Row />);
    const muelleimer = component.find('form');
    muelleimer.simulate('click');
    expect(deleteEvent).toBeCalled;
});

  
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
   
      }

);

