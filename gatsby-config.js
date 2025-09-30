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
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
  ],
}