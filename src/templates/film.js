import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Player from "../components/Player"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulFilm(slug: { eq: $slug }) {
      title
      video {
        file {
          url
        }
      }
    }
  }
`

const Film = props => {
  const film = props.data.contentfulFilm
  return (
    <Layout
      isShy={true}
      canGoBack={true}
      headerContentTitle={film.title}
      isBlack={true}
    >
      <Head title={film.title} />
      <Player controls video={film.video.file.url} fullscreen={true}></Player>
    </Layout>
  )
}

export default Film
