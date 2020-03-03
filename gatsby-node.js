const path = require("path");

const createAllContentPage = async (graphql, createPage, data) => {
  const { templatePath, contentfulName, beginningPath } = data;
  const template = path.resolve(templatePath);
  const response = await graphql(`
    query {
      ${contentfulName} {
        edges {
          node {
            films {
              title,
              slug
            }
          }
        }
      }
    }
  `);

  const films = response.data[contentfulName].edges[0].node.films;

  films.forEach(film => {
    console.log(film.slug);
    console.log(template);
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

  createAllContentPage(graphql, createPage, {
    beginningPath: "films",
    templatePath: "./src/templates/film.js",
    contentfulName: "allContentfulFilmsPage"
  });
  // createAllContentPage(graphql, createPage, {
  //   beginningPath: "art-series",
  //   templatePath: "./src/templates/ContentPage/ContentPage.js",
  //   contentfulName: "allContentfulArtSeriePost",
  // })
  // createAllContentPage(graphql, createPage, {
  //   beginningPath: "exhibitions",
  //   templatePath: "./src/templates/Exhibition/Exhibition.js",
  //   contentfulName: "allContentfulExhibitionPost",
  // })
};
