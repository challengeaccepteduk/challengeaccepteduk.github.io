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
  async headers() {
    return [
      {
        source: '/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ]
  },
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};
