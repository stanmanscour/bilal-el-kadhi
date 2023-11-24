import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import ReactPlayer from 'react-player'
import ViewAllWrapper from '../styles/pages/all'
import useIsMobile from '../hooks/useIsMobile'

const All = () => {
  const data = useStaticQuery(graphql`
    query getAll {
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
    <Layout isAll={true}>
      <Head title="Home" />
      <ViewAllWrapper>
        {medias.map((media, index) => {
          return <Media key={'scrollMedia' + index} media={media} />
        })}
      </ViewAllWrapper>
    </Layout>
  )
}

const Media = props => {
  const isMobile = useIsMobile()
  if (props.media.__typename === 'ContentfulPrint') {
    return (
      <ViewAllWrapper.ItemLink
        key={props.media.id}
        to={`/prints/${props.media.slug}`}
        rel={`nofollow`}
        className={props.slider && 'swiper-slide'}
      >
        <picture>
          <img alt={props.media.title} src={props.media.media.file.url} />
        </picture>
        <noscript>
          <img src={props.media.media.file.url} alt={props.media.title} />
        </noscript>
      </ViewAllWrapper.ItemLink>
    )
  } else {
    return (
      <ViewAllWrapper.ItemLink
        key={props.media.id}
        to={`/films/${props.media.slug}`}
        rel={`nofollow`}
        className={props.slider && 'swiper-slide'}
      >
        <ReactPlayer
          width="100%"
          height={isMobile ? '110px' : '250px'}
          url={props.media.trailer.file.url}
          playing={true}
          muted={true}
          loop={true}
          playsinline={true}
          controls={false}
        />
      </ViewAllWrapper.ItemLink>
    )
  }
}

export default All
