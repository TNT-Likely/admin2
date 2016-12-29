import baseConfig from './base';

const config = {
  appEnv: 'dev',
  api: '/api'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
