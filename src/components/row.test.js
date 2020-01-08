import { shallow } from 'enzyme';
import React from 'react';
import { Row } from './row';
import deleteEvent from './list';


describe ('Row', () => {
 it('expect to render Row component', () => {
    const component = shallow(<Row debug />);
    expect(component).toMatchSnapshot();
});

it('is expected to call function delete on click on the mülleimer', () => {
    const component = shallow(<Row />);
    const muelleimer = component.find('form');
    muelleimer.simulate('click');
    expect(deleteEvent).toBeCalled;
})

});
