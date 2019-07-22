import React from 'react';
import {shallow} from 'enzyme';
import {ReadersList} from './ReadersList';


describe('ReadersList', () => {

  const props = {
    readers: [
      {name: "1"},
      {name: "2"}
    ],
    health: [
      {reader: "1"},
      {reader: "2"}
    ],
    operations: ["one", "two"],
    errors: ["error one", "error two"],
    handleSubmit: jest.fn()
  };
  const readerList = shallow(<ReadersList {...props}/>);

  it('should render properly', function () {
    expect(readerList).toMatchSnapshot();
  });

  it('should contains list of readers', function () {
    expect(readerList.find('DisplayReader').length)
      .toBe(props.readers.length);
  });

  it('should contains ReadersHeader component', function () {
    expect(readerList.find('ReadersHeader')
      .exists()).toBe(true);
  });

  it('should update state with given value', function () {

    const event = {target: {value: "test operation"}};
    readerList.instance().handleChange(event);

    const state = readerList.instance().state;
    expect(state.operation).toBe(event.target.value);
  });

  it('should contains DisplaySelect component', function () {
    expect(readerList.find('DisplaySelect')
      .exists()).toBe(true);
  });

  it('should contains DisplayErrors component', function () {
    expect(readerList.find('DisplayErrors')
      .exists()).toBe(true);
  });

  it('should call handleSubmit if user click start job button', function () {

    const values = [{reader: "reader name"}];
    const operation = 'test operation';

    readerList.instance().setState({values, operation});
    readerList.find('.start-job-btn').simulate('click');

    const expectedData = {readers: ["reader name"], operation};
    expect(props.handleSubmit)
      .toHaveBeenCalledWith(expectedData);
  });

  describe('test state', () => {
    const props = {
      readers: [
        {name: "1"},
        {name: "2"}
      ],
      health: [
        {reader: "1"},
        {reader: "2"}
      ],
      operation: '',
      operations: ["one", "two"],
      errors: ["error one", "error two"],
      handleSubmit: jest.fn()
    };
    const wrapper = shallow(<ReadersList {...props}/>);

    beforeEach(() => {
      wrapper.instance().setState({values: []})
    });

    it('should add reader to the state', function () {
      const {values} = wrapper.instance().state;
      expect(values).toMatchObject([]);

      wrapper.instance().pushValue(props.health[0]);
      expect(wrapper.instance().state.values)
        .toMatchObject([props.health[0]])
    });

    it('should remove reader from the state', function () {
      wrapper.instance().setState({values: [props.health[0]]});
      const {values} = wrapper.instance().state;
      expect(values).toMatchObject([props.health[0]]);

      wrapper.instance().pushValue(props.health[0]);
      expect(wrapper.instance().state.values)
        .toMatchObject([]);
    });

    it('should add one another reader to the state', function () {
      wrapper.instance().setState({values: [props.health[0]]});
      const {values} = wrapper.instance().state;
      expect(values).toMatchObject([props.health[0]]);

      wrapper.instance().pushValue(props.health[1]);
      expect(wrapper.instance().state.values)
        .toMatchObject(props.health);
    });

    it('should edd error messages', function () {
      wrapper.find('.start-job-btn').simulate('click');
      const {errors} = wrapper.instance().state;

      expect(errors.length).toBe(2);
    });
  });
});