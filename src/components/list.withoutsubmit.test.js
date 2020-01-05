import React from 'react';
import {shallow} from "enzyme";
import {mount} from "enzyme";
import List from "./list";
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import {InputField} from "./input-field";

let wrapper;
beforeEach(() => {
    wrapper = mount(<List event="google.de"/>);});
afterEach(cleanup);

// hier wurde versucht, den changeDomainHandler zu testen.
// Da es anscheinend in React nicht üblich ist, direkt Funktionen zu testen, wurde es mit variablen versucht.
describe("changeDomainHandler", () => {
    it("should get value of input-field",() => {
      const event = "google.de";
      const domainName = "";
      wrapper.find('#eingabefeld').simulate("change", { target: { value: "google.de"}})
      expect(wrapper.state().domainName).toEqual("google.de");

      
    });
});

