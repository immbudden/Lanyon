const path = require('path')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const newsStoryTemplate = path.resolve(`src/templates/news-story.js`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
          `
            query {
                allPrismicNewsStory {
                edges {
                    node {
                    uid
                    }
                }
                }
            }
          `
        ).then(result => {
          // if (result.errors) {
          //   reject(result.errors)
          // }
          console.log(result)
          // Create pages for each markdown file.
          result.data.allPrismicNewsStory.edges.forEach(({ node }) => {
            const path = node.uid
            createPage({
              path: `/news/${node.uid}`,
              component: newsStoryTemplate,
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {
                slug: path,
              },
            })
          })
        })
      )
    })
  }