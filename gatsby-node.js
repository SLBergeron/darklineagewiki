const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `LootTableJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allLootTableJson {
        edges {
          node {
            _key
          }
        }
      }
    }
  `)

result.data.allLootTableJson.edges.forEach(({ node }) => {
    createPage({
      path: node._key,
      component: path.resolve(`./src/templates/mob-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node._key,
      },
    })
  })
}