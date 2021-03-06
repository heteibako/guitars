const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

const withNextEnv = nextEnv();
module.exports = withNextEnv();
