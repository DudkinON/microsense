import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './index';

describe('Header', () => {

  const header = shallow(<Header />);

  it('should render properly', function () {
    expect(header).toMatchSnapshot();
  });
});