import React from 'react';
import {shallow} from 'enzyme';
import {DisplayErrors} from './DisplayErrors';

describe('DisplayErrors', () => {

  const props = {
    errors: ["one", "two"]
  };
  const displayErrors = shallow(<DisplayErrors {...props}/>);

  it('should render properly', function () {
    expect(displayErrors).toMatchSnapshot();
  });

  it('should display all errors', function () {
    const text = displayErrors.text();
    props.errors.forEach(error => {
      expect(text).toContain(error);
    });
  });
});