module.exports = {
  siteMetadata: {
    title: `Anna Ihnatsiuk - Project Manager`,
    description: `Result-driven Project Manager with 7+ years of experience`,
    author: `Anna Ihnatsiuk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        sassOptions: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anna Ihnatsiuk - Project Manager`,
        short_name: `A.PM`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6B7FEE`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`, // главный favicon
        icons: [
          {
            src: `/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}