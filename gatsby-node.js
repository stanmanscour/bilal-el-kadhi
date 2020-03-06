const path = require("path");

const createAllPrintPage = async (graphql, createPage) => {
  const template = path.resolve("./src/templates/print.js");
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

  prints.forEach(print => {
    createPage({
      component: template,
      path: `/prints/${print.node.slug}`,
      context: {
        slug: print.node.slug
      }
    });
  });
};

const createAllContentPage = async (graphql, createPage, data) => {
  const { templatePath, contentfulName, beginningPath } = data;
  const template = path.resolve(templatePath);
  const response = await graphql(`
    query {
      ${contentfulName} {
        edges {
          node {
            films {
              slug
            }
          }
        }
      }
    }
  `);

  const films = response.data[contentfulName].edges[0].node.films;

  films.forEach(film => {
    createPage({
      component: template,
      path: `/${beginningPath}/${film.slug}`,
      context: {
        slug: film.slug
      }
    });
  });
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createAllPrintPage(graphql, createPage);

  createAllContentPage(graphql, createPage, {
    beginningPath: "films",
    templatePath: "./src/templates/film.js",
    contentfulName: "allContentfulFilmsPage"
  });
};
