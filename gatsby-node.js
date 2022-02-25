const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
	const electionListTemplate = path.resolve('./src/templates/ListPersonPage.js');
	const fractionMemberTemplate = path.resolve('./src/templates/FractionMember.js');
  const studentTeamTemplate = path.resolve('./src/templates/StudentTeam.js');
  const newsTemplate = path.resolve('./src/templates/NewsMessage.js');
  const municipalityPartyTemplate = path.resolve('./src/pages/gemeenteraadsverkiezingen/partij/municipalityParty.js')

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

  //Individual student team
	const studentTeam = graphql(`
    query getStudentTeam {
      allContentfulStudentTeam {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
  if (result.errors) {
    Promise.reject(result.errors);
  }

  result.data.allContentfulStudentTeam.nodes.forEach(({ slug }) =>
  createPage({
    path: "/student-teams/" + slug,
    component: studentTeamTemplate,
    context: { slug },
  })
  )
  });

    //Individual news message
	const newsMessage = graphql(`
  query getNews {
    allContentfulNews {
      nodes {
        slug
        }
      }
    }
  `).then(result => {
  if (result.errors) {
    Promise.reject(result.errors);
  }

  result.data.allContentfulNews.nodes.forEach(({ slug }) =>
  createPage({
    path: "/news/" + slug,
    component: newsTemplate,
    context: { slug },
  })
  )
  });

    //Individual gemeenteraadsverkiezing partij
    const gemeentePartij = graphql(`
    query getPartijen {
      allContentfulGemeenteraadsverkiezingPartij {
        nodes {
          slug
          }
        }
      }
    `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }
  
    result.data.allContentfulGemeenteraadsverkiezingPartij.nodes.forEach(({ slug }) =>
    createPage({
      path: "/gemeenteraadsverkiezingen/partij/" + slug,
      component: municipalityPartyTemplate,
      context: { slug },
    })
    )
    });

  return Promise.all([listPersons, fractionMember, studentTeam, newsMessage, gemeentePartij]);
};
