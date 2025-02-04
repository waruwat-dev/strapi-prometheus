module.exports = {
  'content-api': {
    type: 'content-api',
    routes: [
      {
        method: 'GET',
        path: '/metrics',
        handler: 'prometheus.metrics',
        config: {
          prefix: '',
          auth: {
            scope: ['find']
          }
        }
      },
    ]
  }
}
