import React from 'react';
import { shallow, mount } from "enzyme";
import List, { onSubmitHandler, compare } from "./list";
import { InputField } from "./input-field";
import Row from "./row";
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { render } from "react-dom";
import deleteEvent from './list';



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
    ReactDOM.render(<List />, div)
  })

  it("removes an item", () => {
    const wrapper = mount(<List />);
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
    expect(wrapper.state()).toHaveProperty('domains', ['id'], 1);
    expect(wrapper.state()).toHaveProperty('domains', ['id'], 2);

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
            domainAvailability: "UNAVAILABLE",
            
          },
          id: 2,

        }
      ],
      error: false,
      loading: false
    };
    wrapper.instance().deleteEvent(mockEvent);
    expect(wrapper.state()).toHaveProperty('domains', ['id'], 2,);
    expect(wrapper.state()).toEqual(expected);
  });


  it('should call onSubmit-function if you click the submit button', () => {
    const wrapper = shallow(<InputField />);
    const button = wrapper.find('.button');
    const input = wrapper.find('input.button').text('Hinzufügen');
    button.simulate('click');
    expect(onSubmitHandler).toBeCalled;
  });

  it('should call the compare -> sort function if you click on the button "Domain" in the tables head', () => {
    const wrapper = shallow(<List />);
    const button = wrapper.find('#domain');
    button.simulate('click');
    expect(compare).toBeCalled;
  });

  it('should call the compare -> sort function if you click on the button "Status" in the tables head', () => {
    const wrapper = shallow(<List />);
    const button = wrapper.find('#status');
    button.simulate('click');
    expect(compare).toBeCalled;
  });

  it('should call the compare -> sort function if you click on the button "Zuletzt geprüft" in the tables head', () => {
    const wrapper = shallow(<List />);
    const button = wrapper.find('#geprueft');
    button.simulate('click');
    expect(compare).toBeCalled;
  });

  it('should call the compare -> sort function if you click on the button "hinzugefügt" in the tables head', () => {
    const wrapper = shallow(<List />);
    const button = wrapper.find('#hinzugefuegt');
    button.simulate('click');
    expect(compare).toBeCalled;
  });



  it("should render TableData with prop domainName", () => {
    act(() => {
      render(<Row url="google.com" />, container);
    });
    expect(container.textContent).toBe("google.com");

    act(() => {
      render(<Row url="" />, container);
    });
    expect(container.textContent).toBe("");
  })

  it("should render TableData with prop domainAvailability", () => {
    act(() => {
      render(<Row availability="UNAVAILABLE" />, container);
    });
    expect(container.textContent).toBe("UNAVAILABLE");

    act(() => {
      render(<Row availability="AVAILABLE" />, container);
    });
    expect(container.textContent).toBe("AVAILABLE");

  })

  it("should render TableData with prop checked", () => {
    act(() => {
      render(<Row checked="14-1-2020 15:43:33" />, container);
    });
    expect(container.textContent).toBe("14-1-2020 15:43:33");
  })

  it("should render TableData with prop added", () => {
    act(() => {
      render(<Row added="14-1-2020 15:43:36" />, container);
    });
    expect(container.textContent).toBe("14-1-2020 15:43:36");
  })

      //Tests setState in addData function
      it('should add new info to the state', () => {
        const component = mount(<List />);
        const instance = component.instance();
       
        instance.setState({
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
    
        expect(instance.state.domains).toStrictEqual( [
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
        ] )
      });
  
      it('addData should update state.domains', () =>  {
          const wrapper = shallow(<List/>).instance();
          
          wrapper.addData({ toAdd: '' });
          
          expect(wrapper.state.domains).toEqual(expect.anything());
      })

  it('should call on Submit Handler', () => {
    const wrapper = shallow(<List />).instance();
    const preventDefaultSpy = jest.fn();
    wrapper.onSubmitHandler( { preventDefault : preventDefaultSpy});
    expect(preventDefaultSpy.mock.calls.length).toBe(1);
  })


  it('should have no domains at start', () => {
    const wrapper = shallow(<List />).instance();
   expect(wrapper.state.domains.length).toBe(0);
});

it('should find result via fetch', async () => {
  try {
    await fetch('http://www.google.com');
    return console.log('Success');
  }
  catch (err) {
    return console.log('Error!!!!' + err);
  }
});
  

});
