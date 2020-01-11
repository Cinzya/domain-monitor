import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import List from "./list";

describe('List', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<List debug />);
    expect(component).toMatchSnapshot();
  });

  //Test addData Function
  it('should add domain API Data into the state', () => {
    const component = mount(<List />);
    const instance = component.instance();
    //Leerer State
    /* expect(instance.state.domainName).toBe(""); */

    instance.setState(() => {
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

    instance.forceUpdate();
    expect(instance.state).toBe()
  });
});