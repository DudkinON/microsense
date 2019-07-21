import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from './types';
import moxios from 'moxios';
import http from '../services/http';


describe('actions', () => {
  let url, action, expectedActions, data;
  const createMockStore = configureMockStore([thunk]);
  const mockStore = createMockStore();
  http.setBaseURL();

  const setMock = () => {
    moxios.stubRequest(url, {
      status: 200,
      response: data
    });

    mockStore.dispatch(action(url));
  };

  const check = done => moxios.wait(() => {
    expect(mockStore.getActions()).toMatchObject(expectedActions);
    done();
  });


  beforeEach(function () {
    data = [1, 2, 3];
    moxios.install()
  });

  afterEach(function () {

    moxios.uninstall();
    mockStore.clearActions();
    url = '';
    action = null;
    expectedActions = null;
    data = null;
  });

  it('should add readers to the store', function (done) {

    action = actions.getReaders;
    url = '/readers';
    expectedActions = [{type: types.SET_READERS, payload: data}];

    setMock();

    return check(done);
  });

  it('should add health to the store', function (done) {

    action = actions.getHealth;
    url = '/health';
    expectedActions = [{type: types.SET_HEALTH, payload: data}];

    setMock();

    return check(done);
  });

  it('should add health to the store', function (done) {

    action = actions.getOperations;
    url = '/operations';
    expectedActions = [{type: types.SET_OPERATIONS, payload: data}];

    setMock();

    return check(done);
  });

});
