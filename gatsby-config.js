module.exports = {
  siteMetadata: {
    title: "Bilal El Kadhi",
    author: "Julie De Mendonça & Stanislas Manscour",
    siteUrl: "https://bilalelkadhi.studio"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-158003972-2"
        // head: false,
        // anonymize: true,
        // respectDNT: true,
        // pageTransitionDelay: 0,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/sitemap_noindex.xml',
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
    
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) => {
          const pages = []
          allSitePage.edges.map((page) => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/${page.node.path}`
            })
          })
          return pages
        },
        resolveSiteUrl: data => data.site.siteMetadata.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
    
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) => {
          return [{ url: `${site.siteMetadata? site.siteMetadata.siteUrl : '' }/` }]
        },
        resolveSiteUrl: data => data.site.siteMetadata.siteUrl,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "8zndjzj2z4fu",
        accessToken: "Nu3Ah8tM8GnBVdcEN1a3DI4xjXP4txGZA-CS3kBvPHQ"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
};
