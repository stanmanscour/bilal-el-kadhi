import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Player from "../components/Player"
import VimeoPlayer from "../components/VimeoPlayer"
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
      vimeo
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
      {film.video && <Player controls video={film.video.file.url} fullscreen={true}></Player>}
      {film.vimeo && <VimeoPlayer controls url={film.vimeo} fullscreen={true}></VimeoPlayer>}
    </Layout>
  )
}

export default Film
