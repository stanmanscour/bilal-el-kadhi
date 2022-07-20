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

// const createAllContentPage = async (graphql, createPage, data) => {
//   const { templatePath, contentfulName, beginningPath } = data;
//   const template = path.resolve(templatePath);
//   const response = await graphql(`
//     query {
//       ${contentfulName} {
//         edges {
//           node {
//             films {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   const films = response.data[contentfulName].edges[0].node.films;
//   films.forEach((film) => {
//     createPage({
//       component: template,
//       path: `/${beginningPath}/${film.slug}`,
//       context: {
//         slug: film.slug,
//       },
//     });
//   });
// };

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createAllPrintPage(graphql, createPage);

  await createAllFilmPage(graphql, createPage);

  // await createAllContentPage(graphql, createPage, {
  //   beginningPath: 'films',
  //   templatePath: './src/templates/film.js',
  //   contentfulName: 'allContentfulFilmsPage',
  // });
};
