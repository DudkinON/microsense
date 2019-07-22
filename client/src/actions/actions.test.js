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

  it('should add message to the store', function () {
    const msg = {type: 'error', message: 'error message'};
    expectedActions = [{
      type: types.SET_MESSAGE,
      payload: msg
    }];
    mockStore.dispatch(actions.setMessage(msg));

    expect(mockStore.getActions()).toMatchObject(expectedActions);
  });

  describe('POST on /jobs', () => {

    afterEach(() => {
      mockStore.clearActions();
    });

    it('should set success message to the store', function (done) {
      const msg = {type: 'success', message: "Job was started!"};
      action = actions.startJob;
      url = '/jobs';
      expectedActions = [{type: types.SET_MESSAGE, payload: msg}];

      setMock();

      return check(done);
    });

    it('should add error message to the store', function (done) {
      const msg = {type: 'error', message: "Server is unavailable, try it later"};
      action = actions.startJob;
      url = '/jobs';
      expectedActions = [{type: types.SET_MESSAGE, payload: msg}];

      moxios.stubRequest(url, {
        status: 409,
        response: "error"
      });

      mockStore.dispatch(action(url));

      return check(done);
    });
  });
});
