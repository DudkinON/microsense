const conf = {
  api: '/api',
  urls: {
    readers: '/readers',
    health: '/health',
    operations: '/operations',
    jobs: '/jobs'
  },
  errors: {
    connection: 'Cannot connect to the server'
  }
};

export default (state = conf) => state;