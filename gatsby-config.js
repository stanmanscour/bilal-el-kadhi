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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-sitemap",
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
