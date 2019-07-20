import React from 'react';
import {shallow} from 'enzyme';
import {Nav} from './Nav';


describe('Nav', () => {

  const nav = shallow(<Nav/>);

  it('should render properly', function () {
    expect(nav).toMatchSnapshot();
  });
});