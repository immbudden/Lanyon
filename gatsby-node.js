const path = require('path')

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // const newsStoryTemplate = path.resolve(`src/templates/news-story.js`)
    // const caseStudyTemplate = path.resolve(`src/templates/case-study.js`)


    // const result = await wrapper(
    //   graphql(`
    //     {

    //       allPrismicNewsStory {
    //         edges {
    //             node {
    //               uid
    //             }
    //         }
    //       }

    //       allPrismicCaseStudy {
    //         edges {
    //             node {
    //               uid
    //             }
    //         }
    //       }
    //     }
    //   `)
    // )

  
    return new Promise((resolve, reject) => {
      const newsStoryTemplate = path.resolve(`src/templates/news-story.js`)
      const caseStudyTemplate = path.resolve(`src/templates/case-study.js`)
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

                allPrismicCaseStudy {
                  edges {
                      node {
                        uid
                      }
                  }
                }

            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          // console.log(result)
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

          result.data.allPrismicCaseStudy.edges.forEach(({ node }) => {
            const path = node.uid
            createPage({
              path: `/case-studies/${node.uid}`,
              component: caseStudyTemplate,
              // In your case study template's graphql query, you can use path
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