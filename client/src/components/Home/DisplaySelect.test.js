import React from 'react';
import {shallow} from 'enzyme';
import {DisplaySelect} from './DisplaySelect';


describe('DisplaySelect', () => {

  const props = {
    onChangeValue: jest.fn(),
    operations: ["operation one", "operation two"]
  };
  const displaySelect = shallow(<DisplaySelect {...props}/>);

  it('should render properly', function () {
    expect(displaySelect).toMatchSnapshot();
  });

  it('should display options', function () {
    expect(displaySelect.find('option').length)
      .toBe(props.operations.length + 1);
  });
});