import React from 'react';
import {shallow, mount} from "enzyme";
import List from "./list";
import Row from "./row";
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import deleteEvent from './list';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



let container = 0;
let wrapper;
let mockSubmit;
beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<List submit={mockSubmit} />);

  // DOM element als render Ziel festlegen
  container = document.createElement("div");
  //container hängt an document drn 
  document.body.appendChild(container);
  });


afterEach(cleanup);


describe('List', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<List debug />);
        expect(component).toMatchSnapshot();
    })

    it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List/>, div)
    })

    it("removes an item", () => {
      const wrapper = mount (<List/>);
     wrapper.setState({
        domains: [
          {
            DomainInfo: {
              domainName: "bar.com", 
              domainAvailability: "UNAVAILABLE"
          },
            id: 1,
         },
          {
            DomainInfo: {
              domainName: "google.com", 
              domainAvailability: "UNAVAILABLE"
          },
           id: 2,
         }
       ]
      })
        wrapper.update();
        expect(wrapper.state()).toHaveProperty('domains',[ 'id'],1);
        expect(wrapper.state()).toHaveProperty('domains',[ 'id'],2);

        const mockEvent = { 
              domains: [
                {
                  DomainInfo: {
                    domainName: "bar.com", 
                    domainAvailability: "UNAVAILABLE"
                },
                  id: 1,
               },
                {
                  DomainInfo: {
                    domainName: "google.com", 
                    domainAvailability: "UNAVAILABLE"
                },
                 id: 2,
               }
             ],
              copyRowArray: [
                {
                  DomainInfo: {
                    domainName: "google.com", 
                    domainAvailability: "UNAVAILABLE"
                },
                 id: 2,
               }
             ]
          };

          const expected = {
            "apiKey": "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX", 
            "domainName": "", 
            domains: [
              {
                DomainInfo: {
                  domainName: "google.com", 
                  domainAvailability: "UNAVAILABLE"
              },
               id: 2,
             }
           ]
            };
      wrapper.instance().deleteEvent(mockEvent);
      expect(wrapper.state()).not.toHaveProperty([ 'id'],1);
      expect(wrapper.state()).toHaveProperty('domains',[ 'id'],2);
      expect(wrapper.state()).toEqual(expected);
    });
});


describe("deleteEvent", () => {
  xit("should call setState on domains", () => {
    const mockEvent = {
      target: { 
        name: "domains",
        value: "test"
      }
    };
    const expected = {
      apiKey: "at_CTh44UQbAh9qDuN0CC7mv4UYGimLX",
      domainName: "",
      domains: "test"
    };
    wrapper.instance().deleteEvent(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });
});


