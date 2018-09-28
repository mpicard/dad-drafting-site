module.exports = {
  siteMetadata: {
    title: "Dad's Drafting"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      }
    }
  ]
};
