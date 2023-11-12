const path = require('path');

const createAllPrintPage = async (graphql, createPage) => {
  const template = path.resolve('./src/templates/print.js');
  const response = await graphql(`
    query {
      allContentfulPrint {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const prints = response.data.allContentfulPrint.edges;
  prints.forEach((print) => {
    createPage({
      component: template,
      path: `/prints/${print.node.slug}`,
      context: {
        slug: print.node.slug,
      },
    });
  });
};

const createAllFilmPage = async (graphql, createPage) => {
  const template = path.resolve('./src/templates/film.js');
  const response = await graphql(`
    query {
      allContentfulFilm {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const films = response.data.allContentfulFilm.edges;
  films.forEach((film) => {
    createPage({
      component: template,
      path: `/films/${film.node.slug}`,
      context: {
        slug: film.node.slug,
      },
    });
  });
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  createPage({
    component: path.resolve('./src/pages/contact.js'),
    path: `/contact`
  });

  await createAllPrintPage(graphql, createPage);
  await createAllFilmPage(graphql, createPage);
};
