const conf = {
  api: 'http://127.0.0.1:5000',
  urls: {
    readers: '/readers',
    health: '/health'
  },
  errors: {
    connection: 'Cannot connect to the server'
  }
};

export default (state = conf) => state;