module.exports = {
  env: {
    MONGO_URI: 'mongodb://localhost:27017/guitarstore',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },
};
