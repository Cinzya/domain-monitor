import { shallow } from 'enzyme';
import React from 'react';
import Row from './row';

it('expect to render Row component', () => {
    expect(shallow(<Row />)).toMatchSnapshot();
});