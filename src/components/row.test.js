import { shallow } from 'enzyme';
import React from 'react';
import Row from './row';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import { render} from "react-dom";
import { act } from "react-dom/test-utils";
import {create} from 'react-test-renderer';
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
      it("changes value when clicked", () => {
        const onClick = jest.fn();
        act(() => {
          ReactDOM.render(<Row onClick={onClick}/>, container);
        });
      
        const wrapper = container.querySelector("#muell.test");
        expect(onClick).toHaveBeenCalledTimes(0);
        //expect(wrapper.state).toBe({props.delete});
      
        act(() => {
          wrapper.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
      
        expect(onClick).toHaveBeenCalledTimes(1);
        //expect(button.innerHTML).toBe("");
      });

      it('should call deleteEvent function wrapper click', () => {
        const wrapper = shallow (<Row />);
        const muelleimer = wrapper.find("form");
        muelleimer.simulate("click");
        expect(deleteEvent).tobeCalled;
      })
      }

);
