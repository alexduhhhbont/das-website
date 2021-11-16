const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
	const electionListTemplate = path.resolve('./src/templates/ListPersonPage.js');
	const fractionMemberTemplate = path.resolve('./src/templates/FractionMember.js');

  	// Individual Lijst persons
	const listPersons = graphql(`
      query getLijstPersonen {
        allContentfulLijstPersoon {
          nodes {
            slug
          }
        }
      }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    result.data.allContentfulLijstPersoon.nodes.forEach(({ slug }) =>
    createPage({
      path: "elections/list/" + slug,
      component: electionListTemplate,
      context: { slug },
    })
  )
  });

    	//Individual fraction members
	const fractionMember = graphql(`
    query getFractieLid {
      allContentfulFractielid {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
  if (result.errors) {
    Promise.reject(result.errors);
  }

  result.data.allContentfulFractielid.nodes.forEach(({ slug }) =>
  createPage({
    path: "party/fraction/" + slug,
    component: fractionMemberTemplate,
    context: { slug },
  })
  )
  });

  return Promise.all([listPersons, fractionMember]);
};
