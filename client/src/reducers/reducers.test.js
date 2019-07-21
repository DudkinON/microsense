import reducers from './index';


describe('reducers', () => {

  const list = reducers(undefined, {});

  it('should contain config reducer', function () {
    expect(list).toHaveProperty('config');
  });

  it('should contains readers reducer', function () {
    expect(list).toHaveProperty('readers');
  });

  it('should contains health reducer', function () {
    expect(list).toHaveProperty('health');
  });

  it('should contains operations reducer', function () {
    expect(list).toHaveProperty('operations');
  });
});
