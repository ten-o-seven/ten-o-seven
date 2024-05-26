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
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
  ],
};
