import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './index';

describe('Header', () => {

  const header = shallow(<Header />);

  it('should render properly', function () {
    expect(header).toMatchSnapshot();
  });

  it('should contains Nav component', function () {
    expect(header.find('Nav').exists()).toBe(true);
  });
});