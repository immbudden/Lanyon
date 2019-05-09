module.exports = {

    siteMetadata: {
        title: `Lanyon - Exceeding Expectations`,
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
    

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },

    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cache`,
    {
        resolve: `gatsby-plugin-typography`,
        options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136265004-1',
        cookieDomain: 'lanyongroup.com'
      }
    },
    
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: 'lanyon',
  
        // An API access token to your prismic.io repository. This is required.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken: 'MC5YQzAxQVJBQUFETUFVNmd4.Q--_ve-_ve-_vSYF77-9JO-_vTzvv71b77-9Te-_ve-_ve-_ve-_ve-_vRcQUQnvv70zPe-_vQLvv70877-9Mg',
  
        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
  
        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],
  
        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          // Your HTML serializer
        },
  
        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: '*',
  
        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-prismic for use with gatsby-image.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different logic for each field if necessary.
        // This defaults to always return true.
        shouldNormalizeImage: ({ node, key, value }) => {
          // Return true to normalize the image or false to skip.
          return true
        },
      },
    },
  ],
}