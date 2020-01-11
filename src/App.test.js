import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme'; // Einbinden Enzyme
import { InputField } from './components/input-field';
import {cleanup} from '@testing-library/react';

afterEach(cleanup);

//const wrapper = shallow(<Foo />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});













