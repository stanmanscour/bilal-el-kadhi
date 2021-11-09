import React from "react"
// import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import gsap from "gsap"
import Layout from "../components/Layout"
import Head from "../components/Head"
import IndexWrapper from "../styles/pages/home"
// import ReactPlayer from "react-player"
// import { useRef } from "react"

const Index = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulHomeVideo {
        media {
          file {
            url
          }
        }
      }
    }
  `)

  return (
    <Layout isHome={true}>
      <Head title="Home" />

      <IndexWrapper>
        <IndexWrapper.ImageWrapper
          image={data.contentfulHomeVideo.media.file.url}
        />

        {/* <ReactPlayer
          playsInline
          url={data.contentfulHomeVideo.media.file.url}
          loop
          playing={videoPlaying}
          muted
        /> */}
      </IndexWrapper>
    </Layout>
  )
}

export default Index
