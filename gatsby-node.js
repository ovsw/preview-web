/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


async function createMoviePages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityMovie {
        edges {
          node {
            _rawOverview(resolveReferences: {maxDepth: 9})
            _id
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const edges = result.data.allSanityMovie.edges || []

  edges
    .forEach((edge, index) => {
      const path = `/${edge.node.slug.current === 'home' ? '' : edge.node.slug.current}/`
      const title = `${edge.node.title}`
      const overview = [...edge.node._rawOverview]
      reporter.info(`Creating movie page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/movie.js'),
        context: {overview, title}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createMoviePages(graphql, actions, reporter)
}