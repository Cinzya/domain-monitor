import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme'; // Einbinden Enzyme
import { InputField } from './components/input-field';
import Intro from './components/intro'; // hinzugefügt
import List from './components/list'; // hinzugefügt
import Navigation from './components/navigation'; // hinzugefügt

//const wrapper = shallow(<Foo />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Testing React Components
describe('InputField', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<InputField debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Intro', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Intro debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('List', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<List debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('Navigation', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navigation debug />);
    expect(component).toMatchSnapshot();
  });
});



