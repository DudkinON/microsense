import React from 'react';
import {shallow} from 'enzyme';
import {DisplayReader} from './DisplayReader';

describe('DisplayReader', () => {

  const props = {
    health: {
      reader: 'test reader',
      status: 'WARNING',
      message: 'Lost connection'
    },
    pushValue: jest.fn()
  };
  const displayReader = shallow(<DisplayReader {...props} />);

  it('should render properly', function () {
    expect(displayReader).toMatchSnapshot();
  });

  it('should render active checkbox', function () {
    const checkbox = displayReader.find('input').props();
    expect(checkbox).toHaveProperty('disabled', false);
  });


  it('should call pushValue', function () {
    const checkbox = displayReader.find('input').props();
    checkbox.onChange();
    expect(props.pushValue).toHaveBeenCalledWith(props.health);
  });

  describe('if health have error status', () => {

    const props = {
      health: {
        reader: 'test reader',
        status: 'ERROR',
        message: 'Lost connection'
      },
      pushValue: jest.fn()
    };
    const wrapper = shallow(<DisplayReader {...props} />);

    it('should render inactive checkbox', function () {

      const checkbox = wrapper.find('input').props();
      expect(checkbox).toHaveProperty('disabled', true);
    });

    it('should not call pushValue', function () {
      const checkbox = wrapper.find('input').props();
      checkbox.onChange();
      expect(props.pushValue).not.toHaveBeenCalled();
    });
  });

  describe('if health undefined', () => {
    const props = {
      name: 'test reader',
      health: undefined,
      pushValue: jest.fn()
    };
    const component = shallow(<DisplayReader {...props} />);

    it('should set state with error parameters', function () {
      const state = {
        reader: 'test reader',
        status: 'ERROR',
        message: 'Reader not found'
      };
      expect(component.instance().state).toMatchObject(state)
    });
  });
});