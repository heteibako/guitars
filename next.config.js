const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
  images: {
    loader: 'imgix',
    path: 'https://silly-allen-dbfbc7.netlify.app/',
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/guitars': { page: '/guitars' },
      '/guitars/[slug]': { page: '/guitars/[slug]' },
      // etc...
    };
  },
  plugins: [['styled-components', { ssr: true, displayName: true, preprocess: false }]],
};

const withNextEnv = nextEnv();
module.exports = withNextEnv();
