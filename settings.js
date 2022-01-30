// * APP SETTINGS ==============================================================
// * General settings for the web application.
// * ===========================================================================

//* General settings
const GENERAL = {
  name:        'DigiPrime3.7',
  description: '',
  version:     1.0
};


//* Directory paths
const path   = require('path');
const root   = path.resolve(__dirname);
const client = path.resolve(__dirname, 'src');
const output = path.resolve(__dirname, 'dist');
const build = path.resolve(__dirname, 'dist');

const PATHS = {
  cache: path.resolve(root, 'node_modules', '.cache'),
  configs: {
    editor:    path.resolve(root, '.editorconfig'),
    babel:     path.resolve(client, '.babelrc'),
    tsconfig:  path.resolve('tsconfig.json'),
    postcss:   path.resolve(client, 'postcss.config.js'),
    tslint:    path.resolve('tslint.json'),
  },
  entry:  path.resolve(client, 'index.tsx'),
  index: {
    input:  path.resolve(client, 'index.html'),
    output: path.resolve(build, 'index.html'),
  },
  devIndex: {
    input:  path.resolve(client, 'index.dev.html'),
    output: path.resolve(output, 'index.html'),
  },
  src: {
    app: path.resolve(client, 'app'),
    components: path.resolve(client, 'app/components'),
    context: path.resolve(client, 'app/context'),
    pages: path.resolve(client, 'app/pages')
  },
  assets: path.resolve(client, 'assets'),
  styles: path.resolve(client, 'styles'),
  root,
  client,
  output,
  build,
  node_modules: path.resolve(root, 'node_modules'),
  static: path.resolve(build, '.'),
  templates: path.resolve(build, 'templates/')
};

//* Web Server
const WEB_SERVER = {
  dev: {
    protocol: 'http',
    host:     'localhost',
    port:     4200,
  },

  node: {
    protocol:   process.env.WEB_SERVER_PROTOCOL || 'http',
    host:       process.env.WEB_SERVER_HOST || '0.0.0.0',
    port:       process.env.WEB_SERVER_PORT || 4200,
    publicPath: '/static/',
  }
};

const TITLES = {
  title: 'DigiPrime',
  pages: {
    dashboard: 'Dashboard',
  }
};

//* API Server settings
const API_SERVER = {
    protocol: 'http',
    host:     'localhost',
    port:     '8000',
};

const PORT_STR = API_SERVER.port === '' ? '': `:${API_SERVER.port}`;
// API can be proxied through webpack dev server!
const API_BASE_URL = 'http://135.125.235.212:9300/';

//* Module export
module.exports = {
  GENERAL,
  PATHS,
  WEB_SERVER,
  TITLES,
  API_BASE_URL,
};
