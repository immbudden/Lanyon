module.exports = {

    siteMetadata: {
        title: `Lanyon - Strapline to go here`,
      },

  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-typography`,
        options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}