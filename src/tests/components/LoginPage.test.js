import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render Login page', () => { 
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});