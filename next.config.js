module.exports = {
  async redirects() {
    return [
      {
        source: '/challenge/:id',
        destination: '/',
        permanent: true,
      },
      {
        source: '/challenge/:id/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/friend/:id',
        destination: '/',
        permanent: true,
      },
      {
        source: '/friend/:id/',
        destination: '/',
        permanent: true,
      },
    ]
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};
