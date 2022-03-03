module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/sdk/test',
        permanent: true,
      },
    ]
  },
}
