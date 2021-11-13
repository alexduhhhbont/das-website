const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
  query getLijstPersonen {
    allContentfulLijstPersoon {
      nodes {
        slug
      }
    }
  }
  `)

  result.data.allContentfulLijstPersoon.nodes.forEach(({ slug }) =>
    actions.createPage({
      path: "elections/list/" + slug,
      component: path.resolve("./src/templates/ListPersonPage.js"),
      context: { slug },
    })
  )
}
