import React from 'react';
import {shallow} from 'enzyme';
import {Home, mapDispatchToProps, mapStateToProps} from './index';


describe('Home', () => {

  const props = {
    urls: {
      readers: '/readers',
      health: '/health',
      operations: '/operations',
      jobs: '/jobs'
    },
    health: [
      {reader: "1"},
      {reader: "2"}
    ],
    readers: [
      {name: "1"},
      {name: "2"}
    ],
    onGetReaders: jest.fn(),
    onGetHealth: jest.fn(),
    onGetOperations: jest.fn(),
    onSetMessage: jest.fn(),
    onStartJob: jest.fn()
      .mockReturnValueOnce(Promise
        .resolve({data: 'success', status: 200}))
  };
  const home = shallow(<Home {...props}/>);

  it('should render properly', function () {
    expect(home).toMatchSnapshot();
  });

  it('should call onGetReaders with passed url', function () {
    expect(props.onGetReaders)
      .toHaveBeenCalledWith(props.urls.readers);
  });

  it('should call onGetHealth with passed url', function () {
    expect(props.onGetHealth)
      .toHaveBeenCalledWith(props.urls.health);
  });

  it('should call onGetOperations with passed url', function () {
    expect(props.onGetOperations)
      .toHaveBeenCalledWith(props.urls.operations);
  });

  it('should contains ReadersList component', function () {
    expect(home.find('ReadersList')
      .exists()).toBe(true);
  });

  it('should not display ReadersList component', function () {
    props.readers = [];
    props.health = [];
    const home = shallow(<Home {...props}/>);

    expect(home.find('ReadersList')
      .exists()).toBe(false);
  });

  it('should call onStartJob', function () {
    const data = {
      operation: "test operation",
      readers: ['one', 'two']
    };
    home.instance().handleSubmit(data);
    expect(props.onStartJob)
      .toHaveBeenCalledWith(props.urls.jobs, data);
  });

  it('should return mapped props', function () {
    const state = {
      config: {
        urls: {},
      },
      health: [],
      readers: []
    };
    const expectedProps = {
      urls: {},
      health: [],
      readers: []
    };
    expect(mapStateToProps(state))
      .toMatchObject(expectedProps);
  });


  it('should map methods to props', function () {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(props).toHaveProperty('onGetReaders');
    expect(props).toHaveProperty('onGetHealth');
  });
});

