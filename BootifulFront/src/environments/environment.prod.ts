export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '8080',
    endpoints: {
      current: '/current',
      add_current: '/add/current/:num',
      acumulate_current: '/accumulate/current/:num'
    }
  }
};
