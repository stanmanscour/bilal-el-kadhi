import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ReactPlayer from "react-player"
import IndexWrapper from "../styles/pages/home"

import 'swiper/swiper.min.css'

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
                vimeo
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
      <ScrollDiv medias={medias} />
    </Layout>
  )
}

const ScrollDiv = (props) => {
  return (
    <IndexWrapper>
        {props.medias.map((media, index) => {
          return <Media  key={'scrollMedia' + index} media={media} />
        })}
    </IndexWrapper>
  )
}

const Media = (props) => {
  if (props.media.__typename === 'ContentfulPrint') {
    return (
      <IndexWrapper.ItemLink
          key={props.media.id}
          to={`/prints/${props.media.slug}`}
          rel={`nofollow`}
        >
          <picture>
            <img
              alt={props.media.title}
              src={props.media.media.file.url}
            />
          </picture>
          <noscript>
            <img src={props.media.media.file.url} alt={props.media.title} />
          </noscript>
        </IndexWrapper.ItemLink>
    )
  } else {
    return (
      <IndexWrapper.ItemLink
        key={props.media.id}
        to={`/films/${props.media.slug}`}
        rel={`nofollow`}
      >
         <ReactPlayer
          loop={true}
          width="900px"
          url={props.media.trailer.file.url}
          playing={true}
          playsinline={true}
          muted={true}
          controls={false}
        />
      </IndexWrapper.ItemLink>
    )
  }
}

export default Index
