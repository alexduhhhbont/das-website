const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
	const electionListTemplate = path.resolve('./src/templates/ListPersonPage.js');
	const fractionMemberTemplate = path.resolve('./src/templates/FractionMember.js');
  const studentTeamTemplate = path.resolve('./src/templates/StudentTeam.js');
  const newsTemplate = path.resolve('./src/templates/updateMessage.js');
  const municipalityPartyTemplate = path.resolve('./src/templates/municipalityParty.js');
  const publicationTemplate = path.resolve('./src/templates/Publication.js');
  const joinDASTemplate = path.resolve('./src/templates/JoinDASOption.js');

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
    allContentfulUpdates {
      nodes {
        slug
        }
      }
    }
  `).then(result => {
  if (result.errors) {
    Promise.reject(result.errors);
  }

  result.data.allContentfulUpdates.nodes.forEach(({ slug }) =>
  createPage({
    path: "/updates/" + slug,
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

      //Publicaties
      const publication = graphql(`
      query getPublications {
        allContentfulPublications {
          nodes {
            slug
            }
          }
        }
      `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }
    
      result.data.allContentfulPublications.nodes.forEach(({ slug }) =>
      createPage({
        path: "/publications/" + slug,
        component: publicationTemplate,
        context: { slug },
      })
      )
      });

        	// Individual Lijst persons
          const JoinDASOption = graphql(`
          query getAllJoinDASOptions {
            allContentfulJoinDas {
                nodes {
                    slug
                    title
                    contactEmail
                }
            }
          }
        `).then(result => {
        if (result.errors) {
          Promise.reject(result.errors);
        }

        result.data.allContentfulJoinDas.nodes.forEach(({ slug }) =>
        createPage({
          path: "join-das/" + slug,
          component: joinDASTemplate,
          context: { slug },
        })
        )
        });

  return Promise.all([listPersons, fractionMember, studentTeam, newsMessage, gemeentePartij, publication, JoinDASOption]);
};
