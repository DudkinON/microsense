import React from 'react';
import {shallow} from 'enzyme';
import {ReadersHeader} from './ReadersHeader';


describe('ReadersHeader', () => {

  const readersHeader = shallow(<ReadersHeader />);

  it('should render properly', function () {
    expect(readersHeader).toMatchSnapshot();
  });
});