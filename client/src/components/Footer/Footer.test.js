import React from 'react';
import {shallow} from 'enzyme';
import {Footer} from './index';


describe('Footer', () => {

  const footer = shallow(<Footer />);

  it('should render properly', function () {
    expect(footer).toMatchSnapshot();
  });
});