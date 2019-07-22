import React from 'react';
import {shallow} from 'enzyme';
import {DisplayWarnings} from './DisplayWarnings';


describe('DisplayWarnings', () => {

  describe('if an array contains warnings', () => {

    const props = {
      warnings: [
        {
          reader: 'reader name',
          status: 'WARNING',
          message: 'warning message'
        }
      ]
    };

    const wrapper = shallow(<DisplayWarnings {...props}/>);

    it('should render properly', function () {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render properly', function () {
      const text = wrapper.find('.text-warning').text();
      props.warnings.forEach(warning => {
        expect(text).toContain(warning.reader);
        expect(text).toContain(warning.status);
        expect(text).toContain(warning.message);
      });
    });
  });

  describe('if an array does not contain warnings', () => {

    const props = {
      warnings: [
        {
          reader: 'reader name',
          status: 'ONLINE',
          message: 'Connected'
        }
      ]
    };
    const displayWarnings = shallow(<DisplayWarnings {...props}/>);

    it('should render properly', function () {
      expect(displayWarnings.find('.text-warning')
        .exists()).toBe(false);
    });
  });
});