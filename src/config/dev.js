import baseConfig from './base';

const config = {
  appEnv: 'dev',
  api: 'http://a.youths.cc'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
