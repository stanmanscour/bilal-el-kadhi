// const path = require("path")

// const createAllContentPage = async (graphql, createPage, data) => {
//   const { templatePath, contentfulName, beginningPath } = data
//   const template = path.resolve(templatePath)
//   const response = await graphql(`
//     query {
//       ${contentfulName} {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   response.data[contentfulName].edges.forEach(edge => {
//     createPage({
//       component: template,
//       path: `/${beginningPath}/${edge.node.slug}`,
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   createAllContentPage(graphql, createPage, {
//     beginningPath: "art-series",
//     templatePath: "./src/templates/ContentPage/ContentPage.js",
//     contentfulName: "allContentfulArtSeriePost",
//   })
//   createAllContentPage(graphql, createPage, {
//     beginningPath: "exhibitions",
//     templatePath: "./src/templates/Exhibition/Exhibition.js",
//     contentfulName: "allContentfulExhibitionPost",
//   })
// }
