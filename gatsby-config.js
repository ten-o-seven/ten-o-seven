/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-google-gtag'],
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png',
      },
    },
  ],
  pathPrefix: '/portfolio',
};
