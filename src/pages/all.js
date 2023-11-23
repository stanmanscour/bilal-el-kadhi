import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import ReactPlayer from 'react-player'
import ViewAllWrapper from '../styles/pages/all'
import useIsMobile from '../hooks/useIsMobile'

const Index = () => {
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
    <Layout isHome={true} isAll={true}>
      <Head title="Home" />
      <ViewAll medias={medias} />
    </Layout>
  )
}

const ViewAll = props => {
  return (
    <ViewAllWrapper>
      {props.medias.map((media, index) => {
        return <Media key={'scrollMedia' + index} media={media} />
      })}
    </ViewAllWrapper>
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
    console.log(props.media.trailer)
    return (
      <ViewAllWrapper.ItemLink
        key={props.media.id}
        to={`/films/${props.media.slug}`}
        rel={`nofollow`}
        className={props.slider && 'swiper-slide'}
      >
        <ReactPlayer
          loop={true}
          height={isMobile ? '120px' : '300px'}
          width={isMobile ? '300px' : '750px'}
          url={props.media.trailer.file.url}
          playing={true}
          muted={true}
        />
      </ViewAllWrapper.ItemLink>
    )
  }
}

export default Index
