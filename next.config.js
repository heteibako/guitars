const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
  plugins: [['styled-components', { ssr: true, displayName: true, preprocess: false }]],
};

const withNextEnv = nextEnv();
module.exports = withNextEnv();
