import reducers from './index';


describe('reducers', () => {

  const list = reducers(undefined, {});

  it('should contain config reducer', function () {
    expect(list).toHaveProperty('config');
  });

  it('should contains readers reducer', function () {
    expect(list).toHaveProperty('readers');
  });

});
