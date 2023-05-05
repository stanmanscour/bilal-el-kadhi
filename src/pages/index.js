import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ReactPlayer from "react-player"
import IndexWrapper from "../styles/pages/home"

const Index = () => {
  const data = useStaticQuery(graphql`
  query getHome {
    allContentfulScrollHome {
      edges {
        node {
          medias {
            __typename
            ... on Node {
              ... on ContentfulPrint {
                title
                id
                slug
                media {
                  file {
                    url
                  }
                }
              }
            }
            ... on Node {
              ... on ContentfulFilm {
                title
                id
                slug
                trailer {
                  file {
                    url
                  }
                }
                video {
                  file {
                    url
                  }
                }
                poster {
                  file {
                    fileName
                    url
                  }
                  description
                }
              }
            }
          }
        }
      }
    }
  }
`)
  const medias = data.allContentfulScrollHome.edges[0].node.medias

  return (
    <Layout isHome={true}>
      <Head title="Home" />
      <IndexWrapper>
        {medias.map((media, index) => {
          if (media.__typename === 'ContentfulPrint') {
            return (
              <IndexWrapper.ItemLink
                  key={media.id}
                  to={`/prints/${media.slug}`}
                  rel={`nofollow`}
                >
                  <picture>
                    <img
                      alt={media.title}
                      src={media.media.file.url}
                    />
                  </picture>
                  <noscript>
                    <img src={media.media.file.url} alt={media.title} />
                  </noscript>
                </IndexWrapper.ItemLink>
            )
          } else {
            return (
              <IndexWrapper.ItemLink
                key={media.id}
                to={`/films/${media.slug}`}
                rel={`nofollow`}
              >
                 <ReactPlayer
                  loop={true}
                  width="900px"
                  url={media.trailer.file.url}
                  playing={true}
                  muted={true}
                />
              </IndexWrapper.ItemLink>
            )
          }
        })}
      </IndexWrapper>
    </Layout>
  )
}

export default Index
